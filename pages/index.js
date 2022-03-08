import Head from 'next/head'
import { useAuth } from '@/lib/auth'
import { Button, Code, Heading, Text, Image  } from '@chakra-ui/react'

export default function Home() {
  const auth = useAuth()
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Heading>
          Fast Feedback
        </Heading>
        <Button onClick={(e) => auth.signinWithGithub()}>Signin</Button>
        {auth?.user && <Button onClick={(e) => auth.signout()}>Signout</Button>}
        <Text>Current user: <Code>{auth.user ? auth.user.name : 'None'}</Code></Text>
        <Text>Email: <Code>{auth.user ? auth.user.email : 'None'}</Code></Text>
        <Text>Provider: <Code>{auth.user ? auth.user.provider : 'None'}</Code></Text>
        {auth?.user ? <Image borderRadius='full' boxSize='150px' src={auth?.user?.photoUrl} alt="User Avatar" width={150} height={150} /> : ''}
      </main>

      <footer>
      </footer>
    </div>
  )
}
