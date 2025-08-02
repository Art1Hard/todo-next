"use client";

import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import ITodo from "@/types/todo";

const TodoRoot = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);

	useEffect(() => {
		const storageTodos = localStorage.getItem("todos");
		if (storageTodos) setTodos(JSON.parse(storageTodos));
	}, []);

	return (
		<>
			<AddTodo todos={todos} setTodos={setTodos} />
			<TodoList todos={todos} setTodos={setTodos} />
		</>
	);
};

export default TodoRoot;
