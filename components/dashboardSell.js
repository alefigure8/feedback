import React from 'react'
import {
  ChakraProvider,
  Flex,
  Stack,
  Link,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from '@chakra-ui/react'
import { Logo } from '@/styles/icons'
import { useAuth } from '@/lib/auth'

const DashboardShell = ({children}) => {

  const auth = useAuth()

  return(
    <ChakraProvider resetCSS>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        backgroundColor="white"
        py={4}
        px={8}
      >
        <Stack spacing={4} isInline justifyContent="center" alignItems="center">
          <Logo boxSize={6}/>
          <Link>Feedback</Link>
          <Link>Sites</Link>
        </Stack>
        <Flex alignItems="center">
          {auth.user && <Link mr={4} onClick={() => auth.signout()}>Log Out</Link>}
          <Avatar size="sm" src={auth?.user?.photoUrl}/>
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.100" p={8} height='100%'>
        <Flex
          flexDirection="column"
          maxWidth="800px"
          w='100%'
          ml="auto"
          mr="auto"
        >
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color='gray.700' fontSize='sm'>Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading size='lg' mb={4}>My Sites</Heading>
        {children}
        </Flex>
      </Flex>
    </ChakraProvider>
  )
}

export default DashboardShell