import "../styles/styles.scss";
import "../styles/css/css-bootstrap.css";
import "../styles/css/css-flexslider.css";
import "../styles/css/css-font-awesome.min.css";
import "../styles/css/css-fontawesome-all.css";
import "../styles/css/css-menu.css";
import "../styles/css/css-popuo-box.css";
import "../styles/css/css-style.css";

import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const headTags = (
    <Head>
      <title>
        Electro Store Ecommerce Category Bootstrap Responsive Web Template | Home :: w3layouts
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <meta
        name="keywords"
        content="Electro Store Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template, Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design"
      />
    </Head>
  );
  return (
    <>
      {headTags}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
