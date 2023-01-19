import React from "react";
import { Flex, Card } from "@chakra-ui/react";

function TodoTemplate({ children }) {
  return (
    <Flex w="full" h="100vh" justifyContent="center" alignItems="center">
      <Card w="md" h="xl" borderRadius="xl" pos="relative" overflow="hidden">
        {children}
      </Card>
    </Flex>
  );
}

export default TodoTemplate;
