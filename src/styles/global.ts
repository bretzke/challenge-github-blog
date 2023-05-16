import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    line-height: 130%;
    font-size: 1rem;
    background-color: ${(props) => props.theme["base-background"]};
    color: ${(props) => props.theme["base-title"]};
  }

  span {
    color: ${(props) => props.theme["base-span"]};
  }
`;
