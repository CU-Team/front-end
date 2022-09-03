import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '~/components/Layout';
import { GlobalStyle } from '~/styles/global';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BROWSER TITLE</title>
        <meta name="description" content="BROWSER-CONTENT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
