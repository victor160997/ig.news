import '../styles/global.scss'
import { Header } from '../components/Header'
import { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
