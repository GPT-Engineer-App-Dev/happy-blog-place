import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, useToast, useColorModeValue } from '@chakra-ui/react';

const AddBlogPost = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const toast = useToast();
  const inputBgColor = useColorModeValue("white", "gray.700");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || content.trim() === '') {
      toast({
        title: 'Error',
        description: 'Please fill in both title and content',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const newPost = {
      id: Date.now(),
      title,
      content,
      date: new Date().toISOString(),
    };
    onAddPost(newPost);
    setTitle('');
    setContent('');
    toast({
      title: 'Success',
      description: 'Blog post added successfully',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} width="100%" maxWidth="600px" margin="auto">
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog post title"
            bg={inputBgColor}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Content</FormLabel>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter blog post content"
            size="lg"
            bg={inputBgColor}
            resize="vertical"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Add Post
        </Button>
      </VStack>
    </Box>
  );
};

export default AddBlogPost;