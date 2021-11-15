import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    @font-face {
      font-family: 'NanumGothic';
      src: url(${'/fonts/NanumGothicBold.otf'});
    }
    body{
        padding: 0;
        margin: 0;
        font-family: 'NanumGothic', sans-serif;
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
`;

export default GlobalStyle;
