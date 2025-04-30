import { Container, Flex, Text, HStack, Button } from "@chakra-ui/react";
import { useColorMode } from "./color-mode";
import {
  HiOutlineSun,
  HiOutlineMoon,
  HiMiniArrowTrendingUp,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container p={2}>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
        gap={4}
        px={4}
      >
        <Link to={"/"} className="logo">
          <Text
            textStyle={{ base: "4xl", sm: "2xl" }}
            display={"flex"}
            alignItems={"center"}
          >
            <HiMiniArrowTrendingUp />
            dreams tracker
          </Text>
        </Link>
        <HStack alignItems={"center"}>
        <Text _hover={{ opacity: "0.85" }}>
            <Link to={"/journal"}>Journal</Link>
          </Text>

          <Text _hover={{ opacity: "0.85" }}>
            <Link to={"/create"}>Add Dream</Link>
          </Text>

          <Button onClick={toggleColorMode} size={"xl"} variant={"plain"}>
            {colorMode === "light" ? <HiOutlineSun /> : <HiOutlineMoon />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};
