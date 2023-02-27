import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    height : 100vh;
  }
  #root{
    height:100%;
  }
`;

export default GlobalStyle;
