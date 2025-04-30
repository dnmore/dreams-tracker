import { useState } from "react";
import { useDreamStore } from "../store/dream";
import {
  VStack,
  Box,
  Button,
  NativeSelect,
  Input,
  Textarea,
  Card,
  Image,
} from "@chakra-ui/react";
import { Toaster, toaster } from "../components/ui/toaster";
import { moods, people, places, objects } from "../labels";
import { HiOutlineCheck } from "react-icons/hi";


export const CreatePage = () => {
  const [newDream, setNewDream] = useState<{
    title: string;
    description: string;
    mood: string;
    people: string;
    place: string;
    object: string;
  }>({
    title: "",
    description: "",
    mood: "",
    people: "",
    place: "",
    object: "",
  });

  const { createDream } = useDreamStore();

  const handleAddDream = async () => {
    const { success, message } = await createDream(newDream);

    if (!success) {
      toaster.create({
        title: message,
        type: "error",
      });
    } else {
      toaster.create({
        title: message,
        type: "success",
      });
    }

    setNewDream({
      title: "",
      description: "",
      mood: "",
      people: "",
      place: "",
      object: "",
    });
  };

  return (
    <Card.Root
      mx={"auto"}
      mt={4}
      flexDirection={{ base: "column", sm: "row" }}
      overflow="hidden"
      maxW={"3xl"}
      rounded={"l1"}
    >
      <Image
        objectFit="cover"
        maxW="400px"
        src="https://images.unsplash.com/vector-1745329694982-ec248d383378?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbHxlbnwwfHwwfHx8Mg%3D%3D"
        alt="Rocket taking off into space"
      />
      <Box w={'full'}>
        <Card.Body>
          <Card.Title mb="2">Track new dream</Card.Title>

          <VStack>
            <Input
              borderColor={"border.emphasized"}
              placeholder="Dream title"
              value={newDream.title}
              onChange={(e) =>
                setNewDream({ ...newDream, title: e.target.value })
              }
            />
            <Textarea
              borderColor={"border.emphasized"}
              placeholder="Dream description"
              py={4}
              resize={"none"}
              value={newDream.description}
              onChange={(e) =>
                setNewDream({ ...newDream, description: e.target.value })
              }
            />

            <NativeSelect.Root>
              <NativeSelect.Field
                borderColor={"border.emphasized"}
                placeholder="Select mood"
                value={newDream.mood}
                onChange={(e) =>
                  setNewDream({ ...newDream, mood: e.target.value })
                }
              >
                {moods.map((mood) => (
                  <option key={mood.value} value={mood.value}>
                    {mood.label}
                  </option>
                ))}
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>

            <NativeSelect.Root>
              <NativeSelect.Field
                borderColor={"border.emphasized"}
                placeholder="Select people"
                value={newDream.people}
                onChange={(e) =>
                  setNewDream({ ...newDream, people: e.target.value })
                }
              >
                {people.map((person) => (
                  <option key={person.value} value={person.value}>
                    {person.label}
                  </option>
                ))}
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>

            <NativeSelect.Root>
              <NativeSelect.Field
                borderColor={"border.emphasized"}
                placeholder="Select place"
                value={newDream.place}
                onChange={(e) =>
                  setNewDream({ ...newDream, place: e.target.value })
                }
              >
                {places.map((place) => (
                  <option key={place.value} value={place.value}>
                    {place.label}
                  </option>
                ))}
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>

            <NativeSelect.Root>
              <NativeSelect.Field
                borderColor={"border.emphasized"}
                placeholder="Select object"
                value={newDream.object}
                onChange={(e) =>
                  setNewDream({ ...newDream, object: e.target.value })
                }
              >
                {objects.map((object) => (
                  <option key={object.value} value={object.value}>
                    {object.label}
                  </option>
                ))}
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
          </VStack>
        </Card.Body>
        <Card.Footer>
          <Button
            w={"full"}
            _hover={{ opacity: "0.85" }}
            rounded={"l1"}
            onClick={handleAddDream}
          >
            <HiOutlineCheck /> Save dream
          </Button>
        </Card.Footer>
      </Box>
      <Toaster />
    </Card.Root>
  );
};
