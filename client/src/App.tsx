import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./components/ui/navbar";
import { HomePage } from "./pages/homePage";
import { CreatePage } from "./pages/createPage";
import { JournalPage } from "./pages/journalPage";

function App() {
  return (
    <Box minH={"100vh"} bg={"bg.panel"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/journal" element={<JournalPage />} />
      </Routes>
    </Box>
  );
}

export default App;
