import styled from "styled-components";

export const FormMemrise = styled.form`
  background-color: rgb(26 28 29);
  color: rgb(193 187 179);
  height: 100%;
  width: 100%;
  position: absolute;

  select {
    font-weight: bold;
    margin: 10px 0 15px 10px;
    width: 95%;
    border-color: rgb(56, 60, 63);
    box-sizing: border-box;
    border-radius: 6.2px;
    padding: 8px 15px;
    background-color: #ffc000;
    color: #2b3648;
    font-size: 10px;
    height: 30px;
  }

  label {
    padding: 5px 0 5px 12px;
    font-weight: bold;
    display: block;
  }
  input {
    margin: 5px 0 0 10px;
    width: 95%;
    border-color: rgb(56, 60, 63);
    box-sizing: border-box;
    border-radius: 6.2px;
    padding: 8px 15px;
    background-color: rgb(24, 26, 27);
    color: rgb(178, 172, 162);
    font-size: 14px;
    height: 38px;
  }

  button {
    color: rgb(232, 230, 227);
    border-color: rgb(98, 148, 45);
    background-color: rgb(117, 160, 43);
    font-weight: bold;
    padding: 0.5em 0.8em;
    border-radius: 6.2px;
    font-size: 1em;
    transition: 0.2s;
  }
  div {
    text-align: center;
  }
  .buton {
    margin: 50% 0 0 0;
  }
`;
