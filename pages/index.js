import Head from 'next/head'
import { useAuth } from '@/lib/auth'

import { Button, Flex } from '@chakra-ui/react'
import { Logo } from '@/styles/icons'

export default function Home() {
  const auth = useAuth()
  return (
    <Flex 
        as='main'
        direction='column'
        align='center'
        justify='center'
        h='100vh'
        >
        <Head>
          <title>Create Next App</title>
        </Head>
        <Logo boxSize={16} />
        {auth?.user ?(
          <Button mt={4} size='sm'><a href='http://localhost:3000/dashboard'>Dashboard</a></Button>
          ) : (
          <Button mt={4} size='sm' onClick={(e) => auth.signinWithGithub()}>Sign In</Button>
          )
        }
    </Flex>
  )
}
