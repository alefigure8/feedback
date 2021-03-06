import React from 'react';
import { Box, Skeleton } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from './Table';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';

const SkeletonRow = ({ width }) => (
  <Box as="tr">
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
  </Box>
);

const SiteTable = ({sites}) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
          <Th>{''}</Th>
        </Tr>
      </thead>
      <tbody>
        {sites.map(site => (
          <Box as="tr" key={site.url}>
            <Td fontWeight='medium'>
              {site.site}
            </Td>
            <Td>
              {site.url}
            </Td>
            <Td>
              <Link href='/'>View Feedback</Link>
            </Td>
            <Td>
              {format(parseISO(site.createdAt), 'PPpp')}
            </Td>
          </Box>
          ))}
      </tbody>
    </Table>
  );
};

export default SiteTable;