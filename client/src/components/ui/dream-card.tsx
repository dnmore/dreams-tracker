import { useDreamStore } from "../../store/dream";
import { Card, Button, HStack, Badge, Box, Heading } from "@chakra-ui/react";
import { Toaster, toaster } from "../ui/toaster";
import { UpdateOverlay } from "./update-overlay";
import { Dream } from "../../store/dream";

import {
  HiOutlineHeart,
  HiOutlineMap,
  HiOutlineKey,
  HiOutlineTrash,
  HiOutlineUser,
} from "react-icons/hi";

type DreamCardProps = {
  dream: Dream;
};
export const DreamCard = ({ dream }: DreamCardProps) => {
  const { deleteDream } = useDreamStore();

  const handleDeleteDream = async (pid: string) => {
    const { success, message } = await deleteDream(pid);

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
  };
  return (
    <Card.Root
      size={"sm"}
      variant={"subtle"}
      rounded={"l1"}
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={"bg.panel"}
      borderWidth={"1px"}
      borderColor={"border.muted"}
    >
      <Card.Header>
        <Heading size={"md"}>{dream.title}</Heading>
      </Card.Header>
      <Card.Body
        display={"flex"}
        flexDir={"column"}
        justifyContent={"space-between"}
      >
        <Box>
          <HStack wrap={"wrap"} py={4}>
            <Badge size="sm" variant={"outline"} rounded={"l1"}>
              <HiOutlineHeart />
              {dream.mood}
            </Badge>
            <Badge size="sm" variant={"outline"} rounded={"l1"}>
              <HiOutlineUser />
              {dream.people}
            </Badge>
            <Badge size="sm" variant={"outline"} rounded={"l1"}>
              <HiOutlineMap />
              {dream.place}
            </Badge>
            <Badge size="sm" variant={"outline"} rounded={"l1"}>
              <HiOutlineKey />
              {dream.object}
            </Badge>
          </HStack>
          <Card.Description my={4} color={"fg.muted"}>
            {dream.description}
          </Card.Description>
        </Box>
        <Card.Footer justifyContent={"flex-end"}>
          <UpdateOverlay dream={dream} />
          <Button
            rounded={"l1"}
            size="sm"
            colorPalette={"red"}
            onClick={() => handleDeleteDream(dream._id)}
          >
            <HiOutlineTrash />
          </Button>
        </Card.Footer>
      </Card.Body>
      <Toaster />
    </Card.Root>
  );
};
