import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { Provider as ReduxProvider } from 'react-redux'
import { Layout } from '../components/layout'
import { NotificationProvider } from '../components/notifications'
import '../styles/global.css'
import { store } from '../state'
import { Web3Provider } from '../connector'
import request from '../utils/request'

function MyApp({ Component, pageProps }) {
  return (
    <Web3Provider>
      <NotificationProvider>
      <ReduxProvider store={store}>
        <Head>
          <title>Metacraft</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ReduxProvider>
      </NotificationProvider>
    </Web3Provider>
  )
}

export default MyApp
