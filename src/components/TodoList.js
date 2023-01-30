import React, { useState, useEffect } from "react";
import { CardBody, Flex } from "@chakra-ui/react";

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import useTodo from './../hooks/useTodo';

function TodoList() {
  // const [todoItemList, setTodoItemList] = useState([]);
  const [isLoading, isError, todoList, createTodo, updateTodo, deleteTodo] = useTodo();

  if (isLoading || todoList === null) {
    return(
      <CardBody display="flex" flexDir="column" overflowY="auto" p={0}>
      <Flex flexDir="column" flex={1} py={6} overflowY="scroll">
        Loading...
      </Flex>
      {/* <TodoForm todoItemList={todoList} setTodoItemList={setTodoItemList} /> */}
    </CardBody>
    )
  }

  if (isError) {
    return(
      <CardBody display="flex" flexDir="column" overflowY="auto" p={0}>
      <Flex flexDir="column" flex={1} py={6} overflowY="scroll">
        Error
      </Flex>
      {/* <TodoForm todoItemList={todoList} setTodoItemList={setTodoItemList} /> */}
    </CardBody>
    )
  }

  return (
    <CardBody display="flex" flexDir="column" overflowY="auto" p={0}>
      <Flex flexDir="column" flex={1} py={6} overflowY="scroll">
        {todoList.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.fields.text}
            isDefaultChecked={item.fields.isDone}
            updateTodo = {updateTodo}
            deleteTodo = {deleteTodo}
          />
        ))}
      </Flex>
      <TodoForm createTodo={createTodo} />
    </CardBody>
  );
}

export default TodoList;
