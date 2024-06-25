import { useState } from "react";
import { Container, Text, VStack, Heading, Box, Image, Link, Button, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import AddBlogPost from "../components/AddBlogPost";
import BlogPost from "../components/BlogPost";

const Index = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  const handleAddPost = (newPost) => {
    setBlogPosts([newPost, ...blogPosts]);
  };

  return (
    <Container maxW="container.md" py={8} bg={bgColor} color={textColor}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to My Blog</Heading>
          <Box boxSize="150px" margin="auto">
            <Image src="/images/profile.jpg" alt="Profile Picture" borderRadius="full" />
          </Box>
          <Text fontSize="lg" mt={4} color={textColor}>
            Hi, I'm [Your Name], a passionate blogger who loves to share thoughts on technology, programming, and life. Stay tuned for my latest posts!
          </Text>
          <Box mt={4}>
            <Link href="https://twitter.com" isExternal mx={2}>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://github.com" isExternal mx={2}>
              <FaGithub size="24px" />
            </Link>
            <Link href="https://linkedin.com" isExternal mx={2}>
              <FaLinkedin size="24px" />
            </Link>
          </Box>
        </Box>

        <AddBlogPost onAddPost={handleAddPost} />

        <VStack spacing={4} align="stretch">
          {blogPosts.map((post) => (
            <BlogPost key={post.id} {...post} bgColor={bgColor} textColor={textColor} />
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;