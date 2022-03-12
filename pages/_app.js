import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react'
import { AuthProvider } from '@/lib/auth'
import theme from '@/styles/theme'
import Head from 'next/head';
import { Global, css  } from '@emotion/react';

const personalTheme = extendTheme({theme})

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={personalTheme}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
