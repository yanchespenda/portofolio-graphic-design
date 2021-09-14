// import '../styles/globals.css'
// import type { AppProps } from 'next/app'

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
// export default MyApp

import { Fragment } from "react"
import type { AppProps } from 'next/app'
import Head from 'next/head'

import MainFooter from '../components/Footer'
import MainHeader from '../components/Header'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
				<title>Homepage</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
			</Head>

      {/* Main Component */}
      <MainHeader />

      {/* Base Component */}
      <Component {...pageProps} />
      {/* End Base Component */}

      <MainFooter />
      {/* End Main Component */}

      {/* <SWRConfig
        value={{ 
          fetcher: (url: string) => axios(url).then((r) => r.data),
          onError: (error, key) => {
            console.error('errorDetected', error, key)
          }
        }}
      >

      </SWRConfig> */}
    </Fragment>
  )
}
export default MyApp
