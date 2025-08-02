"use client";
import ITodo from "@/types/todo";
import React, { ButtonHTMLAttributes, Dispatch, SetStateAction } from "react";
import cn from "clsx";

interface RemoveTodoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	id: string;
	todos: ITodo[];
	setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

const RemoveTodo = ({
	id,
	todos,
	setTodos,
	className,
	...props
}: RemoveTodoProps) => {
	const removeTodoHandler = () => {
		const newTodos = todos.filter((todo) => todo.id !== id);

		localStorage.setItem("todos", JSON.stringify(newTodos));
		setTodos(newTodos);
	};

	return (
		<button
			onClick={removeTodoHandler}
			className={cn(
				"text-red-500 hover:text-red-600 disabled:hover:text-red-500 transition cursor-pointer disabled:cursor-default",
				className
			)}
			{...props}>
			Remove
		</button>
	);
};

export default RemoveTodo;
