import '@fontsource/inter-tight';
import '@fontsource/inter-tight/400.css';
import '@fontsource/inter-tight/500.css';
import '@fontsource/inter-tight/600.css';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Inter Tight', sans-serif;
    background-color: #f5f5f5;
    color: #000;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  button, input, p, h1, h2, h3 {
    max-width: 100%;
  }

  h1, h2, h3, h4, h5, h6,
  p, ul, ol, li, blockquote, figure {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    all: unset;
    font-family: inherit;
    cursor: pointer;
    display: inline-block;
  }

  ul, ol {
    list-style: none;
  }
`;
