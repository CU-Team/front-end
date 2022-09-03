import { createGlobalStyle } from 'styled-components';
import commonStyles from './common';
import { fonts } from './fonts';

export const GlobalStyle = createGlobalStyle`
  ${commonStyles}
  ${fonts}
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
