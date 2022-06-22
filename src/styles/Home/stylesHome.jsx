import { useSelector } from "react-redux";
import styled from "styled-components";

const back = () => {
  const { background } = useSelector((state) => state.menu);
  return background;
};

export const Container = styled.div`
  background: url("${back}") no-repeat center center;
  background-size: cover;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  // margin: 50% 0;
  position: absolute;

  .containerIcons {
    display: flex;
    flex-wrap: wrap;
  }

  .menuIcon {
    display: flex;

    width: 9vh;
    flex-wrap: wrap;
  }

  .menuIcon img:hover {
    cursor: pointer;
  }

  .menuIcon span {
    margin: 0 0 0 1vh;
    color: black !important;
    font-weight: 600;
  }

  .space {
    display: block;
    margin: 0 10px;
  }
  img {
    height: 60px;
    width: 60px;
  }
`;
