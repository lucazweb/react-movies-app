import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Abel|Lato');

  $cor-background-padrao: #f3f3f3;
  $cor-branca: #fff;
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:0;
  }
 
  body{
    background: $cor-branca;
    text-rendering: optimizeLegibility !important;
    -webkkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }

  h1, h2, h3, h3 {
    font-family: 'Abel', sans-serif;
  }

  p, span, a, div, input{
    font-family: 'Lato', sans-serif;
  }

`;