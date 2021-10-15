import { createGlobalStyle } from 'styled-components'

import "./syntax-theme.css";

import NProgress from 'nprogress'; 
import 'nprogress/nprogress.css'; 
NProgress.configure({ showSpinner: false });
import Router from "next/router";
import { useEffect } from 'react';
import { AuthProvider } from '../src/context/AuthContext';

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
    height: 100%;
    overflow-x: hidden;
    background-color: #000;
    font-family: Roboto, Helvetica, sans-serif;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background: #101010;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #474747;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #383838;
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
  useEffect(() => {
    const delay = 500;
    let timer;
    const load = () => {
      timer = setTimeout(function () {
        NProgress.start();
      }, delay);
    };
    const stop = () => {
      clearTimeout(timer);
      NProgress.done();
    };
    Router.events.on("routeChangeStart", () => load());
    Router.events.on("routeChangeComplete", () => stop());
    Router.events.on("routeChangeError", () => stop());
  }, []);

  return (
    <AuthProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AuthProvider>
  )
}
