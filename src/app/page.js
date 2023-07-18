"use client";

import TodoCard from "@/components/TodoCard";
import { useTodo } from "@/context/TodoProvider";

export default function Home() {
  const { todoData } = useTodo();

  return (
    <div>
      {todoData.map((todo) => (
        <TodoCard props={todo} />
      ))}
    </div>
  );
}
