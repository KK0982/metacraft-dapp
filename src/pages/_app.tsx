import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { Provider as ReduxProvider } from 'react-redux'
import { NotificationProvider, Layout } from '@components'
import '@styles/global.css'
import { store } from '@state'
import { Web3Provider } from '@connector'
import { APP_NAME, RPC_URL } from '@configs'

function MyApp({ Component, pageProps }) {
  return (
    <NotificationProvider>
      <Web3Provider appName={APP_NAME} rpc={RPC_URL}>
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
