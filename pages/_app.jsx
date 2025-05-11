import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css"; // Default styles (shared between themes)
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

function MyApp({ Component, pageProps }) {
  const [showSupport, setShowSupport] = useState(false);
  const [theme, setTheme] = useState("dark"); // Default theme is light

  useEffect(() => {
    // Apply the theme class to the <body> element
    document.body.className = theme;
  }, [theme]);

  return (
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
  );
}

export default MyApp;
