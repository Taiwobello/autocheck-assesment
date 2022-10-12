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

      <link href="css/css-bootstrap.css" rel="stylesheet" type="text/css" media="all" />
      <link href="css/css-style.css" rel="stylesheet" type="text/css" media="all" />
      <link rel="stylesheet" href="css/css-fontawesome-all.css" />
      <link href="css/css-popuo-box.css" rel="stylesheet" type="text/css" media="all" />
      <link href="css/css-menu.css" rel="stylesheet" type="text/css" media="all" />

      <link
        href="//fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&amp;subset=latin-ext"
        rel="stylesheet"
      />
      <link
        href="//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese"
        rel="stylesheet"></link>
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
