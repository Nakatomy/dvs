import App from 'next/app'
import { Header, Footer, Main } from '../components'
import '../vendor/normalize.css'
import './style.css'
import { appWithTranslation } from '../i18n'



// This default export is required in a new `pages/_app.js` file.
function MyApp({
  Component,
  pageProps
}) {
  return <>
    <Header />
    <Main>
      <Component {...pageProps} />
    </Main>
    <Footer />

  </>
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default appWithTranslation(MyApp)