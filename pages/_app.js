import App from "next/app";
import { Header, Footer, Main, Nav, LinkComponent, Paragraph } from "../components";
import Link from 'next/link'
import "../vendor/normalize.css";
import styles from "./style.css";
import { appWithTranslation } from "../i18n";
import CookieConsent from "react-cookie-consent";
import { FC, useEffect } from 'react';
import { AppProps } from 'next/app';
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }) {

  const tagManagerArgs = {
    gtmId: 'GTM-KGX8T4V'
  }

  const cookieAccepted = useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])


  return (
    <>
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
      <CookieConsent contentStyle={{ lineHeight: "1.6", display: "flex", justifyItems: "center" }}
        enableDeclineButton
        flipButtons
        declineButtonStyle={{
          background: "none",
          border: "solid 2px #fff",
          color: "#fff",
          borderRadius: "40px",
          textTransform: "uppercase",
          fontSize: "14px",
          fontWeight: "700",
          padding: "20px 32px"
        }}
        style={{ background: "#001540", alignItems: "center" }}
        declineButtonText="Disable"
        buttonStyle={{
          background: "#00A473",
          color: "#fff",
          borderRadius: "40px",
          textTransform: "uppercase",
          fontSize: "14px",
          fontWeight: "700",
          padding: "16px 32px"
        }}
        buttonText="Continue"

        onAccept={cookieAccepted}

      >
        <span >
          We use cookies on this site to improve our service, perform analytics,
          personalize advertising, measure advertising performance, and remember
          website preferences. For more information on cookies visit our
        <LinkComponent href="/privacy-policy" color="white">Privacy Policy.</LinkComponent>
        </span>

      </CookieConsent>
    </ >
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default appWithTranslation(MyApp);
