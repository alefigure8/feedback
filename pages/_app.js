import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '@/lib/auth'
import '@/styles/globals.css'
import theme from '@/styles/theme'
import { extendTheme } from '@chakra-ui/react'

const personalTheme = extendTheme({theme})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={personalTheme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
