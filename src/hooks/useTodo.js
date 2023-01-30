import { useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { base } from './api';

export default function useTodo() {
    const toast = useToast()

    const [ isLoading, setIsLoading ] = useState(false);
    const [isError, setIsError] = useState(false);
    const[todoList, setTodoList] = useState(null);


    const getTodoList = async () => {
        setIsError(false);
        setIsLoading(true);

        try {
            const response = await base().get("/Todo");
            setTodoList(response.data.records);

        } catch (error) {
            setIsError(true);
        }
        setIsLoading(false);
    };

    const createTodo = async (text) => {
        try{
            const response = await base().post("/Todo", {
                fields: {
                    text: text,
                    isDone: false,
                },
            });
            setTodoList([...todoList, response.data]);
            toast({
                title: "할 일이 추가되었습니다.",
                status: "success",
                duration: 2000,
                position: "bottom",
            });

        } catch (error) {
            toast({
                title: "에러발생했습니다.",
                status:'error',
                duration:2000,
                position: 'bottom',
            })
 
        }
    };
    
    useEffect(()=>{
        getTodoList();
    },[]);

    return [isLoading, isError, todoList];
}