import call from "../../assets/icons/llamada.png";
import msg from "../../assets/icons/msg.png";
import chrome from "../../assets/icons/chrome.png";
import photo from "../../assets/icons/photo.png";
import { FooterIconStyle } from "../../styles/icons/FooterStyle";
export const FooterIcon = () => {
  return (
    <FooterIconStyle>
      <img src={call} alt="llamada"></img>
      <div className="space"></div>
      <img src={msg} alt="message"></img>
      <div className="space"></div>
      <img src={chrome} alt="chrome"></img>
      <div className="space"></div>
      <img src={photo} alt="photo"></img>
    </FooterIconStyle>
  );
};
