import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeBackground } from "../../store/slices/Menu/Menu";
import { Container } from "../../styles/Home/stylesHome";

import { Clock } from "../Clock/Clock";
import { FooterIcon } from "../icons/FooterIcon";
import { MainIcons } from "../MainIcons/MainIcons";

export const Home = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(changeBackground());
  // }, []);

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
