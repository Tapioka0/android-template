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
import { v4 as uuidv4 } from "uuid";

import { motion } from "framer-motion";
export const Gallery = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState("");
  const [fecha, setFecha] = useState("");
  const openModal = () => {
    setIsOpen(true);
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

  const varians = {
    si: {
      scale: 4,
      transition: { duration: 3 },
    },
  };

  return (
    <GalleryStyle>
      <GalleryNavbar />
      <DropZones />
      <>
        {gallery
          ? gallery.map((data, indexx) => (
              <>
                <div className="date" key={uuidv4()}>
                  <h3>{new Date(data.date).toLocaleDateString("en-US")}</h3>
                </div>
                <div className="listImagenes">
                  {data.imgs.map((img, index) =>
                    img.includes(".mp4") ? (
                      <div
                        className="imagen"
                        key={uuidv4()}
                        onClick={() => {
                          openModal();
                          setImage(img);
                        }}
                      >
                        <video src={img} />
                      </div>
                    ) : (
                      <motion.div
                        whileTap={{
                          scale: 6,
                          opacity: 1,
                          zIndex: 10,
                        }}
                        key={uuidv4()}
                      >
                        <div
                          className="imagen"
                          onClick={(e) => {
                            openModal();
                            setImage(img);
                            setFecha(
                              new Date(data.date).toLocaleDateString("en-US")
                            );
                          }}
                          id={uuidv4()}
                        >
                          <img src={img} alt="imagen" className="imagen"></img>
                        </div>
                      </motion.div>
                    )
                  )}
                </div>
              </>
            ))
          : null}
      </>

      <MediaModel
        setIsOpen={setIsOpen}
        img={image}
        modalIsOpen={modalIsOpen}
        fecha={fecha}
      />

      {/* <BackBottom /> */}
    </GalleryStyle>
  );
};
