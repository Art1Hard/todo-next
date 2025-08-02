import ThemeToggle from "@/components/ThemeToggle";
import TodoRoot from "@/components/todo/TodoRoot";

export default function Home() {
	return (
		<main className="min-h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center px-4 py-12">
			<div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6">
				<ThemeToggle className="mb-4" />
				<h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
					📝 Todo-List
				</h1>
				<TodoRoot />
			</div>
		</main>
	);
}
