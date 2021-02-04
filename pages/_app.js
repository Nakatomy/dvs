import App from "next/app";
import { Header, Footer, Main, Nav, LinkComponent, Paragraph } from "../components";
import Link from 'next/link'
import "../vendor/normalize.css";
import styles from "./style.css";
import { appWithTranslation } from "../i18n";
import CookieConsent, {getCookieConsentValue } from "react-cookie-consent";
import { FC, useEffect } from 'react';
import { AppProps } from 'next/app';
import TagManager from 'react-gtm-module';
import ReactGA from "react-ga";
import Cookies from "js-cookie";

function MyApp({ Component, pageProps }) {

  // const gtmId = 'GTM-KGX8T4V';
  const gaId = "G-ZZJ15WBGXZ";

  function setTrackingCookies() {
    Cookies.set("CookieConsent", "true");
    Cookies.set("CookieConsent-legacy", "true");
    ReactGA.initialize(gaId);
    ReactGA.pageview(window.location.pathname + window.location.search);
  //  hotjarTracking();
  };
  
  function hotjarTracking () {
  // copied-and-pasted directly from HJ. I could probably have refactored it a little to match my coding style but it's an IIFE and I don't wanna mess with that noise.
    (function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: gtmId, hjsv: 6 };
      a = o.getElementsByTagName("head")[0];
      r = o.createElement("script");
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
  };

 
  //   useEffect(() => {
  //     TagManager.initialize(tagManagerArgs)
  //   }, [])
 


  return (
    <>
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
      <CookieConsent 
      onAccept={setTrackingCookies}
      contentStyle={{ lineHeight: "1.6", display: "flex", justifyItems: "center" }}
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
