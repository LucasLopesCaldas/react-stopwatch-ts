import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face{
    font-family:'clock';
    src: url('/images/clock-font2.otf');
 }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: monospace;
  }

  body {
    background-color: #232323;
  }
`;
