import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shipyard</title>
        <meta name="description" content="Styles and React Components for Migrante Apps" />
        <link rel="icon" href="/migranteIcon.svg" />
      </Head>
      <main className="main">
        <span className="badge badge-primary">Primary</span>
        <span className="badge badge-secondary">Secondary</span>
        <span className="badge badge-success">Success</span>
        <span className="badge badge-danger">Danger</span>
        <span className="badge badge-warning">Warning</span>
        <span className="badge badge-info">Info</span>
        <span className="badge badge-light">Light</span>
        <span className="badge badge-dark">Dark</span>
      </main>
      <footer className="footer">
      </footer>
    </div>
  )
}

export default Home
