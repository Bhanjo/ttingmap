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

        /* 스크롤바 숨김(특정브라우저한정) */
        &::-webkit-scrollbar {
        display: none;
  }
    };
    a{
      color: inherit;
      text-decoration: none;
      text-decoration-line: none;
    }
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
