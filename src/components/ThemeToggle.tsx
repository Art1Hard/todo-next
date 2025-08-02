"use client";

import cn from "clsx";
import { useTheme } from "next-themes";
import { InputHTMLAttributes, useEffect, useState } from "react";

const ThemeToggle = ({
	className,
	...props
}: InputHTMLAttributes<HTMLInputElement>) => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	const isDark = theme === "dark";

	return (
		<label className={cn("inline-flex items-center cursor-pointer", className)}>
			<input
				type="checkbox"
				checked={isDark}
				onChange={() => setTheme(isDark ? "light" : "dark")}
				className="sr-only"
				{...props}
			/>
			<div className="w-10 h-6 bg-gray-300 rounded-full relative dark:bg-gray-700 flex items-center">
				<span
					className={`block w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out
            ${isDark ? "translate-x-5" : "translate-x-1"}`}
				/>
			</div>
			<span className="ml-3 text-sm select-none">
				{isDark ? "Dark" : "Light"}
			</span>
		</label>
	);
};

export default ThemeToggle;
