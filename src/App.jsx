import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { useColorMode, Button, Box } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} position="fixed" top="4" right="4">
      {colorMode === "light" ? <FaMoon /> : <FaSun />}
    </Button>
  );
};

function App() {
  return (
    <Router>
      <Box>
        <ColorModeToggle />
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
