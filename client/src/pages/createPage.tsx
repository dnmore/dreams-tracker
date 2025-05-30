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
import Rocket from "../assets/rocket.svg";

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
      mt={8}
      display={"grid"}
      gridTemplateColumns={{ base: "1fr", sm: "1fr 1fr" }}
      overflow="hidden"
      maxW={"3xl"}
      rounded={"l3"}
      border={"1px solid"}
      borderColor={"border.emphasized"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        bg={"bg.muted"}
        
      >
        <Image
          src={Rocket}
          alt="Rocket taking off into space"
          objectFit="cover"
        />
      </Box>

      <Box>
        <Card.Body>
          <Card.Title
            mb="2"
            className="syne-sans"
            fontSize={"3xl"}
            fontWeight={"bold"}
            marginBottom={"4"}
          >
            Track new dream
          </Card.Title>

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
            rounded={"l2"}
            variant={"solid"}
            onClick={handleAddDream}
          >
            <HiOutlineCheck /> Save Dream
          </Button>
        </Card.Footer>
      </Box>
      <Toaster />
    </Card.Root>
  );
};
