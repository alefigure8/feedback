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
  Box,
  Text,
  Button
} from '@chakra-ui/react'
import { Logo } from '@/styles/icons'

const App = () => (
  <ChakraProvider resetCSS>
    <Flex
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="white"
      p={4}
    >
      <Stack spacing={4} isInline justifyContent="center" alignItems="center">
        <Logo />
        <Link>Link text</Link>
        <Link>Link text</Link>
      </Stack>
      <Flex alignItems="center">
        <Link mr={4}>Account</Link>
        <Avatar size="sm" />
      </Flex>
    </Flex>
    <Flex backgroundColor="gray.100" p={8} height="100%">
      <Flex
        flexDirection="column"
        maxWidth="800px"
        justifyContent="flex-start"
        alignItems="flex-start"
        ml="auto"
        mr="auto"
      >
        <Breadcrumb>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Sites /</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading>My Sites</Heading>
        <Box width="100%" backgroundColor="white" borderRadius={8} p={8}>
          <Heading as="h2" size="md">
            Get feedback on your site instantly
          </Heading>
          <Text>Start today, then grow with us 🌱</Text>
          <Button variant="solid" size="md">
            Upgrade to Starter
          </Button>
        </Box>
      </Flex>
    </Flex>
  </ChakraProvider>
)

export default App