import React from "react";
import Container from "react-bootstrap/Container";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo.js";

export default function todos(props) {
	return (
		<Container className="mb-5">
			<AddTodo onSave={props.onSave} />
			<h3 className="text-center"> Todos List </h3>
			{props.todos.length > 0
				? props.todos.map((todo) => {
						return (
							<TodoItem
								todo={todo}
								onDelete={props.onDelete}
								id={todo.Number}
							/>
						);
				  })
				: props.alt}
		</Container>
	);
}
