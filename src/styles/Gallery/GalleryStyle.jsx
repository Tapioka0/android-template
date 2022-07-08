import styled from "styled-components";

export const GalleryStyle = styled.div`
  background-color: black;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  img {
    image-orientation: unset;
  }

  .listImagenes {
    display: flex;
    flex-wrap: wrap;
  }
  p {
    color: white;
    position: absolute;
  }
  .imagen {
    margin: 0 1px 0 1px;
    height: 10vh;
    width: 11vh;
    object-fit: cover;
  }
  .date {
    padding: 1vh 0 1vh 0;
    color: wheat;
  }
  video {
    margin: 0 1px 0 1px;
    height: 10vh;
    width: 11vh;
    object-fit: cover;
  }
  .drop {
    height: 10vh;
    width: 10vh;
    margin: 3vh 0.2vh;
    background-color: #000000;
    border: 4px solid #464545;
    display: block;
  }
  .drop_text {
    text-align: center;
    margin: 0 auto;
    font-size: 5rem;
    color: #fff;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transform: translateX(-100px);
    transition: all 500ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
    transform: translateX(0px);
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
    transform: translateX(-100px);
  }

  .dialog-enter {
    left: -100%;
    transition: left 300ms linear;
  }
  .dialog-enter-active {
    left: 0;
  }
  .dialog-exit {
    left: 0;
    transition: left 300ms linear;
  }
  .dialog-exit-active {
    left: -100%;
  }
`;
