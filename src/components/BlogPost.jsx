import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const BlogPost = ({ title, content, date }) => {
  return (
    <Box borderWidth={1} borderRadius="lg" p={4} mb={4}>
      <Heading as="h2" size="lg" mb={2}>
        {title}
      </Heading>
      <Text fontSize="sm" color="gray.500" mb={2}>
        {new Date(date).toLocaleDateString()}
      </Text>
      <Text>{content}</Text>
    </Box>
  );
};

export default BlogPost;