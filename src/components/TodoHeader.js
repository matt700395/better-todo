import React from "react";
import { CardHeader, Divider, Heading, Text } from "@chakra-ui/react";

function TodoHeader() {
  // 오늘 날짜를 YYYY년 MM월 DD일 형식으로 표시
  const today = new Date().toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <CardHeader px={8} py={6}>
        <Heading size="lg" color="gray.700" lineHeight="tall">
          Things To Do
        </Heading>
        <Text color="gray.500">{today}</Text>
      </CardHeader>
      <Divider color="gray.300" />
    </>
  );
}

export default TodoHeader;
