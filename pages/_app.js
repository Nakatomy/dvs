import App from "next/app";
import { Header, Footer, Main, Nav } from "../components";
import "../vendor/normalize.css";
import cn from "classnames";
import styles from "./style.css";
import { appWithTranslation } from "../i18n";


// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </div>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default appWithTranslation(MyApp);
