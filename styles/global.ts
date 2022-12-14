import { createGlobalStyle } from 'styled-components';
import commonStyles from './common';

export const GlobalStyle = createGlobalStyle`
  ${commonStyles}
  html {
  }

  body {
    font-family: 'Pretendard', sans-serif;
    font-weight: 600;

    padding: 0;
    margin: 0;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    outline: none;
    color: inherit;
    cursor: pointer;
  }
  button{
    outline: none;
    border: none;
    background-color: transparent;
  }

  h1{
    font-size: 24px;
  }
  h2{
    font-size: 22px;
  }
  h3{
    font-size: 20px;
  }
`;
