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
    <NotificationProvider>
      <Web3Provider>
        <ReduxProvider store={store}>
          <Head>
            <title>Metacraft</title>
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ReduxProvider>
      </Web3Provider>
    </NotificationProvider>
  )
}

export default MyApp
