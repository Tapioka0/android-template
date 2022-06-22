import call from "../../icons/llamada.png";
import msg from "../../icons/msg.png";
import chrome from "../../icons/chrome.png";
import photo from "../../icons/photo.png";
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
