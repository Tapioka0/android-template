import styled from "styled-components";

export const Container = styled.div`
  background: url("${(props) => props.background}") no-repeat center center;
  background-size: cover;
  height: 105%;
  width: 100%;
  position: absolute;

  .content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .containerIcons {
    position: absolute;
    bottom: 0;
  }
  .container_icons {
    display: flex;
    flex-wrap: wrap;
    padding: 0 0 0 1rem;
  }

  .menuIcon {
    max-width: 68px;
    min-width: 68px;
    /* margin: auto; */
    max-height: 80px;
    min-height: auto;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .menuIcon span {
    color: black !important;
    font-weight: 600;
  }

  img {
    height: 60px;
    width: 60px;
  }
`;
