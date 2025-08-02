import React from "react";

const EmptyTodosError = ({ isEmpty }: { isEmpty: boolean }) => {
	return (
		isEmpty && (
			<div className="flex flex-col items-center justify-center text-gray-500">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-12 w-12 mb-1 text-gray-400"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v12a2 2 0 01-2 2z"
					/>
				</svg>
				<p className="text-lg font-medium">No todos yet</p>
			</div>
		)
	);
};

export default EmptyTodosError;
