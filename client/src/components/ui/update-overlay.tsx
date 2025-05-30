import {
  Button,
  CloseButton,
  Dialog,
  Portal,
  VStack,
  Input,
  Textarea,
  NativeSelect,
} from "@chakra-ui/react";
import { HiOutlinePencil, HiOutlineCheck } from "react-icons/hi";
import { useDreamStore } from "../../store/dream";
import { useState } from "react";
import { Toaster, toaster } from "../ui/toaster";
import { moods, people, places, objects } from "../../labels";
import { useColorModeValue } from "./color-mode";
import { Dream } from "../../store/dream";

type UpdateOverlayProps = {
  dream: Dream;
};

export const UpdateOverlay = ({ dream }: UpdateOverlayProps) => {
  const [updatedDream, setUpdatedDream] = useState(dream);

  const { updateDream } = useDreamStore();

  const handleUpdateDream = async (pid: string, updatedDream: Dream) => {
    const { success, message } = await updateDream(pid, updatedDream);
    if (!success) {
      toaster.create({
        title: message,
        type: "error",
      });
    } else {
      toaster.create({
        title: "Dream updated successfully",
        type: "success",
      });
    }
  };

  return (
    <Dialog.Root modal={true}>
      <Dialog.Trigger asChild>
        <Button rounded={"l3"} size="sm">
          <HiOutlinePencil />
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content bg={useColorModeValue("gray.50", "gray.800")}>
            <Dialog.Header>
              <Dialog.Title
                paddingLeft={4}
                className="syne-sans"
                fontSize={"2xl"}
                fontWeight={"bold"}
              >
                Update Dream
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <VStack p={4} gap={4}>
                <Input
                  borderColor={useColorModeValue("gray.200", "gray.700")}
                  placeholder="Dream title"
                  value={updatedDream.title}
                  onChange={(e) =>
                    setUpdatedDream({ ...updatedDream, title: e.target.value })
                  }
                />
                <Textarea
                  borderColor={useColorModeValue("gray.200", "gray.700")}
                  placeholder="Dream description"
                  py={4}
                  resize={"none"}
                  value={updatedDream.description}
                  onChange={(e) =>
                    setUpdatedDream({
                      ...updatedDream,
                      description: e.target.value,
                    })
                  }
                />

                <NativeSelect.Root>
                  <NativeSelect.Field
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                    placeholder="Select mood"
                    value={updatedDream.mood}
                    onChange={(e) =>
                      setUpdatedDream({ ...updatedDream, mood: e.target.value })
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
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                    placeholder="Select people"
                    value={updatedDream.people}
                    onChange={(e) =>
                      setUpdatedDream({
                        ...updatedDream,
                        people: e.target.value,
                      })
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
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                    placeholder="Select place"
                    value={updatedDream.place}
                    onChange={(e) =>
                      setUpdatedDream({
                        ...updatedDream,
                        place: e.target.value,
                      })
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
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                    placeholder="Select object"
                    value={updatedDream.object}
                    onChange={(e) =>
                      setUpdatedDream({
                        ...updatedDream,
                        object: e.target.value,
                      })
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
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="ghost" rounded={"l2"}>
                  Cancel
                </Button>
              </Dialog.ActionTrigger>
              <Dialog.ActionTrigger asChild>
                <Button
                  rounded={"l2"}
                  variant={"solid"}
                  onClick={() => handleUpdateDream(dream._id, updatedDream)}
                >
                  <HiOutlineCheck />
                  Save
                </Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
      <Toaster />
    </Dialog.Root>
  );
};
