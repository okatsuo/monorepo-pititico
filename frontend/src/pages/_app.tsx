import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../graphql/client'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <NextUIProvider>
      <Head>
        <title>Pititico</title>
        <meta name="description" content="Pititico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </NextUIProvider>
  )
}

export default MyApp
