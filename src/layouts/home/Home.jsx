import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeBackground, getAuth } from "../../store/slices/Menu/Menu";
import { Container } from "../../styles/Home/stylesHome";

import { Clock } from "../../components/Clock/Clock";
import { FooterIcon } from "../../components/icons/FooterIcon";
import { MainIcons } from "../../components/MainIcons/MainIcons";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const check = useSelector((state) => state.menu);
  const { login, background } = check;

  useEffect(() => {
    dispatch(getAuth());

    if (!login) return navigate("/", { replace: true });
  }, [login]);
  useEffect(() => {
    if (login) dispatch(changeBackground());
  }, []);
  // all icon
  return login ? (
    <Container
      background={
        background ??
        "https://cdn.discordapp.com/attachments/850650775503765524/992515805797425244/unknown.png"
      }
    >
      <div className="content">
        <Clock />
        <div className="containerIcons">
          <MainIcons />
          <FooterIcon />
        </div>
      </div>
    </Container>
  ) : null;
};
