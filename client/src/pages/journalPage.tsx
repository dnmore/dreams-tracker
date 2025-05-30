import { useEffect, useState, useMemo } from "react";
import { useDreamStore } from "../store/dream";
import { DreamsList } from "../components/ui/dreams-list";
import {
  Container,
  Stack,
  Heading,
  InputGroup,
  Input,
  VStack,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { HiMiniBars3CenterLeft, HiMagnifyingGlass } from "react-icons/hi2";
import { Dream } from "../store/dream";

export const JournalPage = () => {
  const { fetchDreams, dreams, loading, error } = useDreamStore();
  const [searchField, setSearchField] = useState("");

  function filterDreams(dreams: Dream[], searchField: string) {
    return dreams.filter(
      (dream) =>
        dream?.title?.toLowerCase().includes(searchField) ||
        dream?.description?.toLowerCase().includes(searchField)
    );
  }

  useEffect(() => {
    fetchDreams();
  }, [fetchDreams]);

  const filteredDreams = useMemo(
    () => filterDreams(dreams, searchField),
    [dreams, searchField]
  );

  return (
    <Container my={4}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        py={4}
      >
        <Heading
          as={"h1"}
          size={{ base: "xl", sm: "3xl" }}
          py={4}
          display={"flex"}
          alignItems={"center"}
          gap={2}
          className="syne-sans"
          
        >
          <HiMiniBars3CenterLeft />
          Journal Entries
        </Heading>
        <InputGroup flex="1" startElement={<HiMagnifyingGlass />} maxW={200}>
          <Input
            placeholder="Search"
            onChange={(e) => setSearchField(e.target.value.toLowerCase())}
          />
        </InputGroup>
      </Stack>

      <VStack
        p={8}
        borderWidth={"1px"}
        bg={"bg.muted"}
        borderColor={"border.muted"}
      >
        {loading ? (
          <Spinner size="sm" />
        ) : error ? (
          <Text color="red.500">{error}</Text>
        ) : dreams.length > 0 ? (
          filteredDreams.length > 0 ? (
            <DreamsList dreams={filteredDreams} />
          ) : (
            <Text>No dreams found matching your search.</Text>
          )
        ) : (
          <Text>Welcome to your dream journal! It's currently empty.</Text>
        )}
      </VStack>
    </Container>
  );
};
