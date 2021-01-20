import {Header} from '../components'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <div>
      <Header />
  <Component {...pageProps} />
  </div>
}