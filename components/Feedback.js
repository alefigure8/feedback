import React from 'react';
import { Box, Heading, Text, Divider, Icon, Flex, Code } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';


const Feedback = ({ author, text, createdAt, provider, isLast, settings }) => {
  return (
    <Box borderRadius={4} maxWidth="700px" w="full">
        <Heading
          size="sm"
          as="h3"
          mb={0}
          fontWeight="medium"
        >
          {author}
        </Heading>
        {settings?.icons && (
          <Icon name={provider.slice(0, -4)} size="13px" ml="6px" />
        )}
        <Text color="gray.500" mb={4} fontSize="xs">
          {format(parseISO(createdAt), 'PPpp')}
        </Text>
        <Text color='gray.800'>{text}</Text>
        <Divider borderColor='gray.600' mt={6} mb={6} />
    </Box>
  );
};

export default Feedback;