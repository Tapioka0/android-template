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
    padding: 0 0 1vh 0;
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

  .alert-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  .alert-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  .alert-exit {
    opacity: 1;
  }
  .alert-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;
