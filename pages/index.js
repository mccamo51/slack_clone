import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Slack Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Body */}
      <Header />

      {/* Footer */}

      </div>
  )
}
