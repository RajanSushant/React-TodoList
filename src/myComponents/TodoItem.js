import React from "react";

export default function TodoItem({ todo, onDelete }) {
	return (
		<div className="border-bottom border-dark mb-2">
			<h3>{todo.title}</h3>
			<p>{todo.description}</p>
			<button
				className="btn btn-danger btn-sm mb-3"
				onClick={() => onDelete(todo)}
			>
				Delete
			</button>
		</div>
	);
}
