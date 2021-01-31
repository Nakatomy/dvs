import App from "next/app";
import { Header, Footer, Main, Nav } from "../components";
import "../vendor/normalize.css";
import styles from "./style.css";
import { appWithTranslation } from "../i18n";
import CookieConsent from "react-cookie-consent";
import {useState} from 'react'


// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {

  return (
    <div>
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
      <CookieConsent
        enableDeclineButton
        flipButtons
        style={{ background: "#001540", alignItems: "center" }}
        buttonStyle={{ background: "#fff", color: "#4e503b" }}
        buttonText="Accept cookies"
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default appWithTranslation(MyApp);
