import Moon from "../assets/moon.svg";

import { Container, VStack, Text, Heading, Image, Box } from "@chakra-ui/react";

export const HomePage = () => {
  return (
    <Container mb={4}>
      <VStack h={"lg"} alignItems={"center"} justifyContent={"center"}>
        <Box maxWidth={{ base: "100px", sm: "200px" }} mb={4}>
          <Image src={Moon} alt="moon" />
        </Box>
        <Heading
          as={"h1"}
          size={{ base: "4xl", sm: "6xl" }}
          bg={"blue.500/30"}
          px={4}
          className="syne-sans"
        >
          dreams tracker
        </Heading>
        <Text
          fontSize={{ base: "2xl", sm: "3xl" }}
          textAlign={"center"}
          mt={2}
          mb={6}
          p={2}
          fontWeight={"light"}
        >
          capture your dreams, discover yourself
        </Text>
      </VStack>
    </Container>
  );
};
