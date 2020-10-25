import type { AppProps } from 'next/app';
import '../styles/index.scss';

const CatWikiApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default CatWikiApp;
