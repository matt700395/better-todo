import React from "react";

import { Checkbox, Flex, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function TodoItem(props) {
  const deleteItem = () => {
    props.setTodoItemList(
      props.todoItemList.filter((item) => item.id !== props.id)
    );
  };

  return (
    <Flex
      px={8}
      py={2}
      justifyContent="space-between"
      _hover={{ bgColor: "blue.50" }}
    >
      <Checkbox size="lg" defaultChecked={props.isDefaultChecked}>
        {props.text}
      </Checkbox>
      <IconButton icon={<DeleteIcon />} size="sm" onClick={deleteItem} />
    </Flex>
  );
}

export default TodoItem;
