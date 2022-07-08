import Modal, { defaultStyles } from "react-modal";
import {
  TransformComponent,
  TransformWrapper,
} from "@pronestor/react-zoom-pan-pinch";
import styled from "styled-components";
import { useState } from "react";

export const MediaModel = ({ img, modalIsOpen, setIsOpen, fecha }) => {
  const [navbar, setNavbar] = useState(true);
  const [zoom, setZoom] = useState(false);
  defaultStyles.overlay.background = "none";
  const customStyles = {
    content: {
      left: "auto",
      right: "auto",
      background: "rgba(0, 0, 0) none repeat scroll 0% 0%",
      border: "none",
      inset: 0,
      padding: "20px 3px",
      display: "flex",
      "flex-direction": "column",
      "justify-content": "center",
    },
  };

  Modal.setAppElement(document.getElementById("root"));

  function closeModal() {
    setIsOpen(false);
  }
  const duration = 200;
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        closeTimeoutMS={200}
      >
        {navbar ? (
          <Top>
            <div className="top_config">
              <button onClick={closeModal} className="btn">
                <svg
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 32 32"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXLink="http://www.w3.org/1999/xlink"
                  width="32px"
                  height="32px"
                >
                  <path d="M28,14H8.8l4.62-4.62C13.814,8.986,14,8.516,14,8c0-0.984-0.813-2-2-2c-0.531,0-0.994,0.193-1.38,0.58l-7.958,7.958  C2.334,14.866,2,15.271,2,16s0.279,1.08,0.646,1.447l7.974,7.973C11.006,25.807,11.469,26,12,26c1.188,0,2-1.016,2-2  c0-0.516-0.186-0.986-0.58-1.38L8.8,18H28c1.104,0,2-0.896,2-2S29.104,14,28,14z" />
                </svg>
              </button>
              <p>{fecha}</p>
            </div>
          </Top>
        ) : null}

        {img.includes(".mp4") ? (
          <div onClick={() => (navbar ? setNavbar(false) : setNavbar(true))}>
            <video
              src={img}
              controls
              style={{
                width: "100%",
                height: "100%",
              }}
              onPlay={() => (navbar ? setNavbar(false) : setNavbar(true))}
            />
          </div>
        ) : (
          <div onClick={() => (navbar ? setNavbar(false) : setNavbar(true))}>
            <TransformWrapper
              options={{
                maxScale: 8,
                limitToBounds: false,
                limitToWrapper: false,
                centerContent: true,
              }}
              doubleClick={{
                mode: "zoomOut",
              }}
              onZoomStart={() => setZoom(true)}
              onZoomStop={() => setZoom(false)}
            >
              <TransformComponent>
                <img
                  src={img}
                  style={
                    // zoom
                    //   ? {
                    //       height: "100%",
                    //       width: "100vh",
                    //       position: "relative",
                    //       "box-sizing": "border-box",
                    //       objectFit: "cover",
                    //    }
                    {
                      width: "auto",
                      height: "auto",
                      "max-width": "100%",
                      "max-height": "100%",
                      objectFit: "cover",
                    }
                  }
                  className="view"
                />
              </TransformComponent>
            </TransformWrapper>
          </div>
        )}
        {/* </motion.div> */}
        {navbar ? (
          <Footer>
            <button onClick={closeModal} className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M22 13h-2V7h-8.414l-2-2H4v14h9v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v7zm-4 4v-3.5l5 4.5-5 4.5V19h-3v-2h3z"
                  fill="#000"
                />
              </svg>
            </button>

            <button onClick={closeModal} className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-edit"
                width="25px"
                height="25px"
              >
                <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
              </svg>
            </button>
            <button onClick={closeModal} className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-heart"
                width="25px"
                height="25px"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <button onClick={closeModal} className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-trash-2"
                width="25px"
                height="25px"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </button>
            <button onClick={closeModal} className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="35px"
                height="35px"
              >
                <g id="Layer_50" data-name="Layer 50">
                  <path d="M32,10.5A21.52,21.52,0,0,0,10.5,32c1.18,28.52,41.82,28.51,43,0A21.52,21.52,0,0,0,32,10.5Zm0,40A18.52,18.52,0,0,1,13.5,32c1-24.54,36-24.54,37,0A18.52,18.52,0,0,1,32,50.5Z" />
                  <path d="M43.48,27.24c-6.29.2-6.29,9.32,0,9.52C49.77,36.56,49.77,27.44,43.48,27.24Zm0,6.52a1.76,1.76,0,0,1,0-3.52A1.76,1.76,0,0,1,43.48,33.76Z" />
                  <path d="M32,27.24c-6.29.2-6.29,9.32,0,9.52C38.29,36.56,38.29,27.44,32,27.24Zm0,6.52a1.76,1.76,0,0,1,0-3.52A1.76,1.76,0,0,1,32,33.76Z" />
                  <path d="M20.52,27.24c-6.29.2-6.29,9.32,0,9.52C26.81,36.56,26.81,27.44,20.52,27.24Zm0,6.52a1.76,1.76,0,0,1,0-3.52A1.76,1.76,0,0,1,20.52,33.76Z" />
                </g>
              </svg>
            </button>
          </Footer>
        ) : null}
      </Modal>
    </>
  );
};

const Top = styled.div`
  .top_config {
    position: absolute;
    top: 0%;
    background-color: #fff;
    width: 100%;
    display: flex;
    z-index: 1;
  }
  button {
    background-color: #fff;
    margin-top: 0rem !important;
    padding-top: 3rem;
    margin-bottom: 2rem;
  }
  p {
    padding-left: 70px;
    padding-top: 3rem;
    font-weight: bold;
    font-size: 2rem;
  }
`;
const Footer = styled.footer`
  position: absolute;
  bottom: 0%;
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    margin-top: 0rem !important;
    margin-bottom: 2rem;
  }
`;
