import { Container, Flex, HStack, Button } from "@chakra-ui/react";
import { useColorMode } from "./color-mode";
import { HiOutlineSun, HiOutlineMoon, HiMiniMoon } from "react-icons/hi2";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container py={2} borderBottom={"1px solid"} borderColor={"border.emphasized"}>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
        gap={4}
      >
        <Button
          variant={"plain"}
          textStyle={{ base: "5xl", sm: "3xl" }}
          fontWeight={"bold"}
          display={"flex"}
          alignItems={"center"}
          gap={0}
        >
          <HiMiniMoon
            style={{ transform: "rotate(60deg)" }}
            color={"#7fb5f5"}
            
          />
          <Link to={"/"} className="syne-sans">
            dreamy
          </Link>
        </Button>

        <HStack alignItems={"center"} gap={4}>
          <Button rounded={"l3"} size={"md"} variant={"subtle"}>
            <Link to={"/create"}>Add dream</Link>
          </Button>
          <Button rounded={"l3"} size={"md"} variant={"ghost"}>
            <Link to={"/journal"}>Journal</Link>
          </Button>

          <Button onClick={toggleColorMode} size={"xl"} variant={"plain"}>
            {colorMode === "light" ? <HiOutlineSun /> : <HiOutlineMoon />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};
