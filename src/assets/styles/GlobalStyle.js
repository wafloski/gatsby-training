import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: "Poppins";
      src: url("../fonts/Poppins-Regular.ttf") format("ttf");
      font-weight: normal;
      font-style: normal;
    }
    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: greyscale;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-size: 1.6rem;
    }
`;

export default GlobalStyle;
