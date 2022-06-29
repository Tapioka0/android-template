import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "../../store/slices/Menu/Menu";
import { GalleryStyle } from "../../styles/Gallery/GalleryStyle";
import { BackBottom } from "../../components/BottomBack/BackBottom";
import { GalleryNavbar } from "./GalleryNavbar";
import { useNavigate } from "react-router-dom";
export const Gallery = () => {
  const { gallery } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const check = useSelector((state) => state.menu);
  const navigate = useNavigate();
  const { login } = check;
  useEffect(() => {
    dispatch(getAuth());
    if (!login) navigate("/", { replace: true });
  }, [login]);
  return (
    <GalleryStyle>
      <GalleryNavbar />
      <div className="listImagenes">
        {gallery.map((data, index) => (
          <div className="imagenes">
            {index % 3 === 0 ? <p>"Fecha: 5/04/22"</p> : null}

            <img src={data} alt="imagen" className="imagen"></img>
          </div>
        ))}
      </div>
      <BackBottom />
    </GalleryStyle>
  );
};
