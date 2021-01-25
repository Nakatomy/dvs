import {Header, Footer} from '../components'
import '../vendor/normalize.css'
import './style.css'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <div>
  <Header />
  <Component {...pageProps} />
  <Footer />
  </div>
}