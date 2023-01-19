import React from "react";
import { Flex } from "@chakra-ui/react";

import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <Flex flexDir="column" flex={1} py={6} overflowY="scroll">
      <TodoItem text="할 일 1" isDefaultChecked={true} />
      <TodoItem text="할 일 2" isDefaultChecked={false} />
    </Flex>
  );
}

export default TodoList;
