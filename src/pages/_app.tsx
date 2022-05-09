import React from "react";
import { theme } from "../config";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import Sidebar from "../partials/Sidebar";
import { store } from "../apis/redux";

import "../assets/styles/pace.css";
import "../assets/styles/styles.css";
import "../assets/styles/font.css";
import { SnackbarProvider } from "notistack";
import ServerManagerProvider from "../components/ServerManagerProvider";

class MyApp extends React.Component<MyAppProps> {
  componentDidMount(): void {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }

  state = {
    error: false,
  };

  componentDidCatch(): void {
    this.setState({
      error: false
    });
  }

  render(): JSX.Element {
    return (
      <>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="https://res.cloudinary.com/streaming-cuba/image/upload/v1619659241/events/icons/apple-icon-57x57_rwhqpm.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="https://res.cloudinary.com/streaming-cuba/image/upload/v1619659240/events/icons/apple-icon-60x60_zv3nsx.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="https://res.cloudinary.com/streaming-cuba/image/upload/v1619659240/events/icons/apple-icon-72x72_ndtmsb.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="https://res.cloudinary.com/streaming-cuba/image/upload/v1619659240/events/icons/apple-icon-76x76_agmojg.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="https://res.cloudinary.com/streaming-cuba/image/upload/v1619659240/events/icons/apple-icon-114x114_ttkg7r.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="https://res.cloudinary.com/streaming-cuba/image/upload/v1619659240/events/icons/apple-icon-120x120_m2xprn.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="https://res.cloudinary.com/streaming-cuba/image/upload/v1619659240/events/icons/apple-icon-144x144_ra09ky.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="https://res.cloudinary.com/streaming-cuba/image/upload/v1619659241/events/icons/apple-icon-152x152_n8vliz.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://res.cloudinary.com/streaming-cuba/image/upload/v1619659241/events/icons/apple-icon-180x180_kqrgut.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="https://res.cloudinary.com/streaming-cuba/image/upload/v1619659242/events/icons/android-icon-192x192_zwd0ys.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://res.cloudinary.com/streaming-cuba/image/upload/v1619659241/events/icons/favicon-32x32_xx9bsy.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="https://res.cloudinary.com/streaming-cuba/image/upload/v1619659241/events/icons/favicon-96x96_byjuvp.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://res.cloudinary.com/streaming-cuba/image/upload/v1619659241/events/icons/favicon-16x16_rngawd.png"
          />
          <meta
            name="msapplication-TileImage"
            content="https://res.cloudinary.com/streaming-cuba/image/upload/v1619659241/events/icons/ms-icon-150x150_jjo2zb.png"
          />
          <link rel="manifest" href={`${process.env.NEXT_PUBLIC_HOSTNAME}/manifest.json`} />
          <meta
            name="msapplication-TileColor"
            content={theme.palette.primary.main}
          />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />

          <script src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"></script>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `,
            }}
          />
        </Head>
        <DefaultSeo
          openGraph={{
            type: "website",
            locale: "es",
            url: "https://eventos.streamingcuba.com",
            title: "Eventos StreamingCuba",
            description: "Nuestros eventos al alcance de todos.",
            images: [
              {
                url:
                  "https://res.cloudinary.com/streaming-cuba/image/upload/v1619659241/events/icons/favicon-96x96_byjuvp.png",
                width: 96,
                height: 96,
                alt: "Favicon"
              },
            ],
          }}
          titleTemplate="%s | Eventos StreamingCuba"
          defaultTitle="Eventos StreamingCuba"
          description="Nuestros eventos al alcance de todos."
        />
        {(this.props.error || this.state.error) ? (
          <this.props.Component {...this.props.pageProps} />
        ) : (
          <Provider store={store}>
            <ServerManagerProvider>
              <CookiesProvider>
                <ThemeProvider theme={theme}>
                  <SnackbarProvider
                    maxSnack={3}
                    anchorOrigin={{
                      horizontal: "center",
                      vertical: "bottom",
                    }}
                  >
                    <CssBaseline />
                    <Navbar />
                    <Sidebar />
                    <this.props.Component {...this.props.pageProps} />
                    <Footer />
                  </SnackbarProvider>
                </ThemeProvider>
              </CookiesProvider>
            </ServerManagerProvider>
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

// export function reportWebVitals(metric: NextWebVitalsMetric): void {
//   //TODO: Send it to GOogle Analytics
// }
