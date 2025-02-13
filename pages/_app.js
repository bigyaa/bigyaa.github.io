import React from "react";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bigya Bajracharya | Portfolio</title>
        <meta name="description" content="Software Engineer Portfolio" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;