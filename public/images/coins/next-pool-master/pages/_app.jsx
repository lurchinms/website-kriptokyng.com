import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";

import {
  Navigation,
  Support,
  Footer,
  Ticker,
} from "../components/shared/layout";

import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [showSupport, setShowSupport] = useState(false);
  return (
    <>
      <Ticker />
      <Navigation openSupport={() => setShowSupport(true)} />
      <Support show={showSupport} onHide={() => setShowSupport(false)} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
