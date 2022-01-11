import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Montserrat', 'sans-serif' !important;
    font-size: 16px;
  }
  
  body {
    background-color: #f5f5f5;
    
    & > iframe {
      display: none;
    }
  }
`;
