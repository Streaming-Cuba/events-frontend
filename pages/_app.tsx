import React, { useEffect } from "react";
import { theme } from "../config";
import { GetStaticProps } from "next";
import App, { NextWebVitalsMetric } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import Sidebar from "../partials/Sidebar";
import { store } from "../apis/redux";

class MyApp extends React.Component<MyAppProps> {
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/icons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/icons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/icons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/icons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/icons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/icons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/icons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/icons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/icons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content={theme.palette.primary.main} />
          <meta
            name="msapplication-TileImage"
            content="/icons/ms-icon-144x144.png"
          ></meta>

          <script src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"></script>
          <link rel="stylesheet" href="/styles/pace.css"></link>

          <link href="/styles/font.css" rel="stylesheet" />
          <link href="/styles/styles.css" rel="stylesheet" />
        </Head>
        <DefaultSeo
          openGraph={{
            type: "website",
            locale: "es",
            url: "https://eventos.streamingcuba.com",
            title: "Eventos StreamingCuba",            
            description: "Nuestros eventos al alcance de todos.",
            images: [
              { url: "/icons/android-icon-48x48.png" }
            ]
          }}
          title={undefined}
          titleTemplate="%s | Eventos StreamingCuba"
          defaultTitle="Eventos StreamingCuba"
        />
        {this.props.error ? (
          <this.props.Component {...this.props.pageProps} />
        ) : (
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Navbar />
              <Sidebar />
              <this.props.Component {...this.props.pageProps} />
              <Footer />
            </ThemeProvider>
          </Provider>
        )}
      </>
    );
  }

  static async getInitialProps({ err, ctx }) {
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

    const hasError = res && res.statusCode >= 400;
    return { error: hasError };
  }
}

interface MyAppProps {
  Component: any;
  pageProps: any;
  user: any;
  error: boolean;
  version: string;
}

export default MyApp;

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
  //TODO: Send it to GOogle Analytics
}
