import {Header, Footer, Main} from '../components'
import '../vendor/normalize.css'
import './style.css'



// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <div>
    <Header />
   <Main>
      <Component {...pageProps} />
  </Main>
  <Footer />
  </div>
}