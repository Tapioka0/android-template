import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, getImgToGallery } from "../../store/slices/Menu/Menu";
import { GalleryStyle } from "../../styles/Gallery/GalleryStyle";
import { BackBottom } from "../../components/BottomBack/BackBottom";

import { GalleryNavbar } from "./GalleryNavbar";
import { useNavigate } from "react-router-dom";
import { DropZones } from "../../components/DropFIle/DropFile";
import { MediaModel } from "../../components/Modals/MediaModal";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
export const Gallery = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState("");
  const [inProp, setInProp] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const { gallery } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const check = useSelector((state) => state.menu);
  const navigate = useNavigate();
  const { login } = check;
  useEffect(() => {
    dispatch(getAuth());
    if (!login) navigate("/", { replace: true });
  }, [login]);
  useEffect(() => {
    if (login && gallery[0] == undefined) dispatch(getImgToGallery());
  }, [gallery]);

  const fechas = (data, index) => {
    const date = new Date(data.fecha);

    const oldDate = date.toLocaleDateString("en-US");

    const DateNow = new Date().toLocaleDateString("en-US");

    if (DateNow === oldDate) return <p>今日</p>;
  };

  return (
    <GalleryStyle>
      <GalleryNavbar />
      <DropZones />
      <>
        {gallery
          ? gallery.map((data, indexx) => (
              <>
                <div className="date" key={indexx + 1}>
                  <h3>{new Date(data.date).toLocaleDateString("en-US")}</h3>
                </div>
                <div className="listImagenes">
                  {data.imgs.map((img, index) =>
                    img.includes(".mp4") ? (
                      <div className="imagen" key={index}>
                        <video src={img} controls />
                      </div>
                    ) : (
                      <div
                        className="imagen"
                        onClick={() => {
                          openModal();

                          setImage(img);
                        }}
                      >
                        <img src={img} alt="imagen" className="imagen"></img>
                      </div>
                    )
                  )}
                </div>
              </>
            ))
          : null}
      </>

      <MediaModel setIsOpen={setIsOpen} img={image} modalIsOpen={modalIsOpen} />

      {/* <BackBottom /> */}
    </GalleryStyle>
  );
};
