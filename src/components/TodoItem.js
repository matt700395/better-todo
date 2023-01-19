import React from "react";

import { Checkbox, Flex, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function TodoItem(props) {
  return (
    <Flex
      px={8}
      py={2}
      justifyContent="space-between"
      _hover={{ bgColor: "blue.100" }}
    >
      <Checkbox size="lg" defaultChecked={props.isDefaultChecked}>
        {props.text}
      </Checkbox>
      <IconButton icon={<DeleteIcon />} size="sm" />
    </Flex>
  );
}

export default TodoItem;
