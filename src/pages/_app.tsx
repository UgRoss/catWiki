import type { AppProps } from 'next/app';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import '../styles/index.scss';

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
});

const CatWikiApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default CatWikiApp;
