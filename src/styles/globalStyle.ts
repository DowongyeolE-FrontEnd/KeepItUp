import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`${css`
  ${reset}

  * {
    box-sizing: border-box;
  } 
  a {
    text-decoration: none;
    color: inherit;
  }
  input,
  textarea {
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  input:focus {
    outline: none;
  }
  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
`}`;

export default GlobalStyle;
