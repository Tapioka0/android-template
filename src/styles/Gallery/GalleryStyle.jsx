import styled from "styled-components";

export const GalleryStyle = styled.div`
  background-color: black;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: absolute;

  .listImagenes {
    display: flex;
    flex-wrap: wrap;
  }
  p {
    color: white;
    position: absolute;
  }
  .imagen {
    height: 15vh;
    width: 15vh;
    object-fit: cover;
    margin: 3vh 0.2vh;
  }
`;
