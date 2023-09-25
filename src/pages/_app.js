import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/global.css'; 
function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <title>Plataforma de matemática</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      {/* Inclua qualquer componente de layout aqui, como um cabeçalho ou menu */}
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;

