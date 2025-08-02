"use client";
import ITodo from "@/types/todo";
import cn from "clsx";
import RemoveTodo from "./RemoveTodo";
import { Dispatch, SetStateAction } from "react";
import CompleteTodo from "./CompleteTodo";
import EmptyTodosError from "./EmptyTodosError";

interface TodoListProps {
	todos: ITodo[];
	setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
	return (
		<ul className="space-y-3">
			<EmptyTodosError isEmpty={todos.length === 0} />
			{todos.map((todo) => (
				<li
					key={todo.id}
					className={cn(
						"flex items-center justify-between bg-gray-50 hover:bg-gray-100 dark:bg-gray-700/80 dark:hover:bg-gray-700/90 px-4 py-3 rounded-lg shadow-sm  transition",
						todo.isChecked && "opacity-50"
					)}>
					<div className="flex items-center gap-2">
						<CompleteTodo
							id={todo.id}
							isChecked={todo.isChecked}
							todos={todos}
							setTodos={setTodos}
						/>
						<div>
							<p
								className={cn(
									"text-gray-800 dark:text-gray-200",
									todo.isChecked && "line-through"
								)}>
								{todo.title}
							</p>
							<p className="text-gray-500 dark:text-gray-400 text-sm">
								{new Date(todo.createdAt).toLocaleString()}
							</p>
						</div>
					</div>
					<RemoveTodo id={todo.id} todos={todos} setTodos={setTodos} />
				</li>
			))}
		</ul>
	);
};

export default TodoList;
