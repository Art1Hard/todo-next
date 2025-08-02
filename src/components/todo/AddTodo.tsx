"use client";

import ITodo from "@/types/todo";
import { Dispatch, SetStateAction, useState } from "react";

interface AddTodoProps {
	todos: ITodo[];
	setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

const AddTodo = ({ todos, setTodos }: AddTodoProps) => {
	const [value, setValue] = useState("");

	const addTodoHandler = () => {
		const storageTodos = localStorage.getItem("todos");
		const todo: ITodo = {
			id: crypto.randomUUID(),
			title: value,
			isChecked: false,
			createdAt: new Date(),
		};

		setValue("");

		if (!storageTodos) {
			localStorage.setItem("todos", JSON.stringify([todo]));
			setTodos([todo]);
			return;
		}

		localStorage.setItem("todos", JSON.stringify([...todos, todo]));
		setTodos((prev) => [...prev, todo]);
	};

	return (
		<div className="flex items-center gap-2 mb-6">
			<input
				value={value}
				onChange={(e) => setValue(e.currentTarget.value)}
				type="text"
				placeholder="Enter todo..."
				className="flex-grow px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
			/>
			<button
				onClick={addTodoHandler}
				disabled={value === ""}
				className="bg-blue-500 hover:bg-blue-600 disabled:hover:bg-blue-500 disabled:opacity-50 text-white px-4 py-2 rounded-lg shadow transition-all cursor-pointer disabled:cursor-default">
				Add
			</button>
		</div>
	);
};

export default AddTodo;
