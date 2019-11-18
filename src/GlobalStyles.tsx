import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html, body {
  width: 100%;
  height: 100vh;
}

* {
  
  @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
  font-family: 'Montserrat', sans-serif;
}
`;

export default GlobalStyles;
