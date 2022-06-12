import '../styles/globals.css'
import type { AppProps } from 'next/app'
import layout from '../styles/Layout.module.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div >
      <Component {...pageProps} />
    </div>);

}

export default MyApp
