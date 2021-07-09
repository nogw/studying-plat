import { createGlobalStyle, ThemeProvider } from 'styled-components'

import NProgress from 'nprogress'; 
import 'nprogress/nprogress.css'; 
NProgress.configure({ showSpinner: false });

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh;
    min-width: 100vw;
  }

  body {
    background-color: #000;
    font-family: Roboto, Helvetica, sans-serif;
  }

  #nprogress {
    .bar {
      background: #768BD4 !important;
      height: 4px;
    }
    .peg {
      box-shadow: 0 0 0px #fff, 0 0 0px #fff;
    }
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
