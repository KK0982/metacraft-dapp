import 'tailwindcss/tailwind.css'
import Head from 'next/head';
import { Layout } from '../components/layout'
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Metacraft</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp
