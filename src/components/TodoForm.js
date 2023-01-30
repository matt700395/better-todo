import React, { useState } from "react";
import { Button, FormControl, Input } from "@chakra-ui/react";

function TodoForm({ todoItemList, setTodoItemList }) {
  const [todoInputText, setTodoInputText] = useState("");

  const handleTodoInputTextChange = (e) => {
    setTodoInputText(e.target.value);
  };

  const addTodoItem = () => {
    if (todoInputText === "") {
      return;
    }
    setTodoItemList([
      ...todoItemList,
      {
        id: new Date().getTime() + Math.random(),
        text: todoInputText,
        isDefaultChecked: false,
      },
    ]);
    setTodoInputText("");
  };

  return (
    <FormControl w="full" p={4} display="flex">
      <Input
        placeholder="할 일을 추가해보세요"
        mr={4}
        value={todoInputText}
        onChange={handleTodoInputTextChange}
      />
      <Button colorScheme="blue" onClick={addTodoItem}>
        추가
      </Button>
    </FormControl>
  );
}

export default TodoForm;
