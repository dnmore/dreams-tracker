import { Link } from "react-router-dom";

import { Container, VStack, Text, Heading, Button } from "@chakra-ui/react";

export const HomePage = () => {
  return (
    <Container mb={4}>
      <VStack
        h={"lg"}
        alignItems={"center"}
        justifyContent={"center"}
        borderWidth={2}
      >
        <Heading
          as={"h1"}
          size={{ base: "3xl", sm: "4xl" }}
          bg={"purple.400"}
          color={"black"}
          px={2}
        >
          dreams tracker
        </Heading>
        <Text
          fontSize={{ base: "2xl", sm: "3xl" }}
          textAlign={"center"}
          mb={2}
          p={2}
        >
          capture your dreams, discover yourself.
        </Text>
        <Link to={"/create"}>
          <Button
            textTransform={"uppercase"}
            _hover={{ opacity: "0.85" }}
            rounded={"l1"}
            size={"lg"}
          >
            Start Tracking
          </Button>
        </Link>
      </VStack>
    </Container>
  );
};
