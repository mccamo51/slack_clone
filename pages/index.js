import Head from 'next/head'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default function Home() {
  return (
    <div className='min-w-[600px]'>
      <Head>
        <title>Slack Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Body */}
      <Header />
      {/* Sidebar */}
      <Sidebar />

      {/* Footer */}

      </div>
  )
}
