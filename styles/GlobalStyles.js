import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-size: 62.5%;
    color: #23242a;
    font-family: 'Alice', serif;
    background: #fff;
    position: relative;
  }

  a{
    color: #23242a;
  }

  p{
    font-size: 1.1rem;
    line-height: 1.7rem;
    font-weight: 400;
  }
`;

export default GlobalStyle;
