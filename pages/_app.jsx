import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import {
  Navigation,
  Support,
  Footer,
  Ticker,
} from "../components/shared/layout";
import { TranslationProvider } from "../src/context/TranslationContext";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  const [showSupport, setShowSupport] = useState(false);
  const [theme, setTheme] = useState("dark"); // Default theme is light

  useEffect(() => {
    // Apply the theme class to the <body> element
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      {" "}
      <Head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;300;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Whisper&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        <TranslationProvider>
          <Ticker />
          <Navigation
            openSupport={() => setShowSupport(true)}
            theme={theme}
            setTheme={setTheme}
          />
          <Support show={showSupport} onHide={() => setShowSupport(false)} />
          <Component {...pageProps} />
          <Footer />
        </TranslationProvider>
      </Provider>
    </>
  );
}

export default MyApp;
