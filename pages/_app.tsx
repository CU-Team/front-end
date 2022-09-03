import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '~/components/Layout';
import { GlobalStyle } from '~/styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BROWSER TITLE</title>
        <meta name="description" content="BROWSER-CONTENT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
