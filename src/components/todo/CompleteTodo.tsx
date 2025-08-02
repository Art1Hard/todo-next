import ITodo from "@/types/todo";
import React, { Dispatch, InputHTMLAttributes, SetStateAction } from "react";
import cn from "clsx";

interface CompleteTodoProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	isChecked: boolean;
	todos: ITodo[];
	setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

const CompleteTodo = ({
	id,
	isChecked,
	todos,
	setTodos,
	className,
	...props
}: CompleteTodoProps) => {
	const checkHandler = () => {
		const newTodos = todos.map((todo) =>
			todo.id === id ? { ...todo, isChecked: !isChecked } : todo
		);

		localStorage.setItem("todos", JSON.stringify(newTodos));
		setTodos(newTodos);
	};

	return (
		<input
			type="checkbox"
			checked={isChecked}
			onChange={checkHandler}
			className={cn(
				"h-5 w-5 text-blue-500 rounded focus:ring-blue-400",
				className
			)}
			{...props}
		/>
	);
};

export default CompleteTodo;
