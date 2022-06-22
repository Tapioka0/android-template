import { useSelector } from "react-redux";
import { GalleryStyle } from "../../styles/Gallery/GalleryStyle";
import { GalleryNavbar } from "./GalleryNavbar";

export const Gallery = () => {
  const { gallery } = useSelector((state) => state.menu);

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
    </GalleryStyle>
  );
};
