import { useState } from "react";
import { Container, Text, VStack, Heading, Box, Image, Link, Button, useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import AddBlogPost from "../components/AddBlogPost";
import BlogPost from "../components/BlogPost";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
      onClick={toggleColorMode}
      variant="ghost"
      aria-label="Toggle color mode"
    />
  );
};

const Index = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const handleAddPost = (newPost) => {
    setBlogPosts([newPost, ...blogPosts]);
  };

  return (
    <Container maxW="container.md" py={8} bg={useColorModeValue("white", "gray.800")} color={useColorModeValue("black", "white")}>
      <Box position="absolute" top={4} right={4}>
        <ColorModeToggle />
      </Box>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" borderWidth={1} borderRadius="lg" p={4} mb={4} bg={useColorModeValue("white", "gray.700")}>
          <Heading as="h1" size="2xl" mb={4}>Welcome to My Blog</Heading>
          <Box boxSize="150px" margin="auto">
            <Image src="/images/profile.jpg" alt="Profile Picture" borderRadius="full" />
          </Box>
          <Text fontSize="lg" mt={4}>
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
            <BlogPost key={post.id} {...post} />
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;