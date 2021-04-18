import React, { useEffect } from "react";
import { theme } from "../config";
import {GetStaticProps } from 'next';
import { NextWebVitalsMetric } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import Sidebar from "../partials/Sidebar";
import {store} from "../apis/redux";

class MyApp extends React.Component<MyAppProps> {
  constructor(props: MyAppProps) {
    super(props);
  }

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
          <meta
            name="version"
            content={this.props.version}
          />
          <script src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"></script>
          <link rel="stylesheet" href="/styles/pace.css"></link>
          <link href="/images/meeting-room.png" rel="icon" />
          <link href="/styles/font.css" rel="stylesheet" />
          <link href="/styles/styles.css" rel="stylesheet" />
        </Head>
        <DefaultSeo
          openGraph={{
            type: "website",
            locale: "es",
            url: "https://eventos.streamingcuba.com",
            site_name: "Eventos",
            title: "Eventos",
            description: "SEO made easy for Next.js projects",
          }}
          title="Eventos"
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
