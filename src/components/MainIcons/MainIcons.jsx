import gallery from "../../assets/icons/gallery.png";
import diccionario from "../../assets/icons/diccionario.png";
import folder from "../../assets/icons/folder.png";
import music from "../../assets/icons/music-note.png";
import playStore from "../../assets/icons/google-play.png";
import memrise from "../../assets/icons/memrise.png";
import { useNavigate } from "react-router";
export const MainIcons = () => {
  const navigate = useNavigate();
  return (
    <div className="container_icons">
      <div className="menuIcon">
        <img
          src={memrise}
          alt="Memrise"
          onClick={() => {
            navigate("/home/memrise", { replace: true });
          }}
        />
        <span>Memrise</span>
      </div>

      <div className="menuIcon">
        <img src={music} alt="Folder" />
        <span>ミュージック</span>
      </div>

      <div className="menuIcon">
        <img src={playStore} alt="Folder" />
        <span>Playストア</span>
      </div>

      <div className="menuIcon">
        <img
          src={gallery}
          alt="Gallery"
          onClick={() => {
            navigate("/home/gallery", { replace: true });
          }}
        />
        <span>ギャラリー</span>
      </div>

      <div className="menuIcon">
        <img src={diccionario} alt="Diccionario" />
        <span>辞書</span>
      </div>
      <div className="menuIcon">
        <img src={folder} alt="Folder" />
        <span>フォルダー</span>
      </div>
    </div>
  );
};
