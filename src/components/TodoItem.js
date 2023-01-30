import React from "react";
import { Flex, Checkbox, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function TodoItem(props) {
  const handleIsDone = (e) => {
    props.updateTodo(props.id, e.target.checked)
  }

  const deleteItem = () => {
    props.deleteTodo(props.id);
  };


  return (
    <Flex
      px={8}
      py={2}
      _hover={{ bgColor: "blue.50" }}
      justifyContent="space-between"
    >
      <Checkbox size="lg" defaultChecked={props.isDefaultChecked} onChange={handleIsDone}>
        {props.text}
      </Checkbox>
      <IconButton icon={<DeleteIcon />} size="sm" ml={2} onClick={deleteItem} />
    </Flex>
  );
}

export default TodoItem;
