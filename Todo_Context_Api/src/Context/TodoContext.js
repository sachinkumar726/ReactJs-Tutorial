import { createContext, useContext } from "react";
import React from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo: "Todo Msg",
            compeleted: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCompelete: (id) => {},
});

export const useTodo = () =>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider 