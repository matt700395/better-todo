import { useState, useEffect } from "react";

import { base } from "./api"

export default function useTodo() {
    const [ isLoading, setIsLoading ] = useState(flase);
    const {isError, setIsError} = useState(false);
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

    useEffect(()=>{
        getTodoList();
    },[]);

    return [isLoading, isError, todoList];
}