import Head from 'next/head'
import { Login } from '../components/Login'

export default function Home() {

  const isAuthenticated = false;

  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Login/>
    </div>
  )
}
