import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

:root {
    --yellow: #ffc600;
    --black: #ffffff;
    --gray: #ececec;
  }
  
  p {
    line-height: 1.8;
  }
  
  img {
    max-width: 100%;
  }
  
  a {
    color: black;
    text-decoration: underline wavy var(--yellow);
  }
  
  h1,
  h2 {
    font-size: 80px;
    font-style: italic;
    font-weight: 100;
    margin: 0;
  }
  
`

export default GlobalStyle
