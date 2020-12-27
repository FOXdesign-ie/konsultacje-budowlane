import {createGlobalStyle} from 'styled-components';
const GlobalStyle = createGlobalStyle`
   *  {
      margin: 0;
      padding: 0;
      box-sizing: border-box; 
   }

   body {
      background-color: #1B1B1B;
      color: #E5E5E5;
      font-family: 'Noto Serif', serif;
      max-width: 100vw;
      overflow-x: hidden;
   }

   h1 {
        font-size: 3.8vw;
        line-height: 1.2em;
        font-weight: 100;
        letter-spacing: 0.1em;
    }
    h2 {
        font-size: 2vw;
        line-height: 1.5em;
        font-weight: 100;
        letter-spacing: 0.08em;
    }

    p {
       font-size: 1.5vw;
       line-height: 1.8em;
    }

   button {
      width: 30%;
      padding: 0.4em;
      background: transparent;
      border: 1px solid #717171;
      color: #717171;
      font-size: 1.5vw;
      letter-spacing: 0.05em;
      font-family: 'Noto Serif', serif;
      cursor: pointer;
      transition: 1s linear;
   }

   button:hover {
      border: 1px solid #7f6921;
   }

   a {
      color: #717171;
      text-decoration: none;
      transition: 1s linear;
      &:hover {
         color: #7f6921;
      }
      &:focus{
         color: #7f6921;
      }
      &:active{
         color: #7f6921;
      }
   }
`;

export default GlobalStyle;