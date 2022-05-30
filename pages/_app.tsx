import '@styles/main.scss'
import type { AppProps } from 'next/app'
import Layout from '@components/Layout/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Shipyard</title>
        <meta name="description" content="Styles and React Components for Migrante Apps" />
        <link rel="icon" href="/migranteIcon.svg" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
