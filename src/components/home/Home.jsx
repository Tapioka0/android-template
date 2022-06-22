import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeBackground, getAuth } from "../../store/slices/Menu/Menu";
import { Container } from "../../styles/Home/stylesHome";

import { Clock } from "../Clock/Clock";
import { FooterIcon } from "../icons/FooterIcon";
import { MainIcons } from "../MainIcons/MainIcons";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const check = useSelector((state) => state.menu);
  const { login } = check;

  useEffect(() => {
    dispatch(getAuth());
    if (!login) navigate("/", { replace: true });
  }, [login]);

  // all icon

  return (
    <Container>
      <Clock />
      <div className="containerIcons">
        <MainIcons />
        <FooterIcon />
      </div>
    </Container>
  );
};
