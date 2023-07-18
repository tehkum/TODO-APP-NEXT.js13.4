"use client";

import { useTodo } from "@/context/TodoProvider";
import { useState } from "react";

export default function NewTodo() {
  const [todoInfo, setInfo] = useState({
    todoName: "",
    completed: false,
  });
  const { newTodo } = useTodo();

  const todoHandler = (e) => {
    setInfo({ ...todoInfo, todoName: e.target.value });
  };

  return (
    <div>
      <label htmlFor="todoName">Todo Name</label>
      <input
        type="text"
        id="todoName"
        name="todoName"
        placeholder="Enter Todo"
        onChange={todoHandler}
      />
      <button onClick={() => newTodo(todoInfo)}>Add</button>
    </div>
  );
}
