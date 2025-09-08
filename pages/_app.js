import React from "react";
import Head from "next/head";
import ErrorBoundary from "../components/ErrorBoundary";
import { TEXT_CONTENT } from "../constants";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Head>
        <title>{TEXT_CONTENT.HERO.NAME} | Portfolio</title>
        <meta name="description" content="Software Engineer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} resume={false} />
    </ErrorBoundary>
  );
}

export default MyApp;