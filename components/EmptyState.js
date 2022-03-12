import React from 'react'
import {
  Heading,
  Flex,
  Text,
} from '@chakra-ui/react'
import AddSiteModal from './AddSiteModal'

const EmptyState = () => (
  <Flex
    width="100%"
    backgroundColor="white"
    borderRadius={8}
    p={16}
    justify='center'
    direction='column'
    align='center'
    >
    <Heading as="h2" size="md" mb={2}>
      You haven´t added any sites.
    </Heading>
    <Text mb={4}>Welcome 👋 Let´s get started.</Text>

    <AddSiteModal />
  </Flex>
)

export default EmptyState