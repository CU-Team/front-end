import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '~/components/Layout';
import '@components/Home/Article/index.css';
import '@styles/fonts.css';
import { GlobalStyle } from '~/styles/global';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hightlight</title>
        <meta name="description" content="BROWSER-CONTENT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecoilRoot>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
