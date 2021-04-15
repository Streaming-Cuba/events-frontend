import React, { useEffect } from 'react';
import { theme } from '../config';
import Head from 'next/head';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import Navbar from '../partials/Navbar';
import Footer from '../partials/Footer';
import { DefaultSeo } from 'next-seo';

function MyApp(props: MyAppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <script src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"></script>
        <link
          rel="stylesheet"
          href="/styles/pace.css"
        ></link>
        <link href="/images/meeting-room.png" rel="icon" />
        <link href="/styles/font.css" rel="stylesheet" />
        <link href="/styles/styles.css" rel="stylesheet" />
      </Head>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'es',
          url: 'https://eventos.streamingcuba.com',
          site_name: 'Eventos: StreamingCuba',
        }}
      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <props.Component {...props.pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

interface MyAppProps {
  Component: any;
  pageProps: any;
  user: any;
}

/**
 * Fetch some data server side before rendering the page client side.
 *
 * @param {object} context
 *   The context object.
 */
MyApp.getInitialProps = async ({ ctx }) => {
  const req = ctx.req;
  const pathname = ctx.pathname;
  const res = ctx.res;

  /**
   * Abort if one var is not present.
   * For example, the req obj will be undefined if we don't
   * have a page reload but a page switch via the Next Router.
   */
  if (!req || !pathname || !res) {
    return {};
  }
  return {};
};

export default MyApp;
