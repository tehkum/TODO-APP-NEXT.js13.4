"use client";

import { createContext, useContext, useState } from "react";

export const TodoContext = createContext({});

export default function TodoProvider({ children }) {
  const [todoData, setTodo] = useState([]);

  const newTodo = (todo) => {
    setTodo([...todoData, { ...todo }]);
  };

  const deleteTodo = (todo) => {
    setTodo(todoData.filter((todos) => todos.todoName !== todo.todoName));
  };

  return <TodoContext.Provider value={{ newTodo, deleteTodo, todoData }}>{children}</TodoContext.Provider>;
}

export const useTodo = () => useContext(TodoContext);
