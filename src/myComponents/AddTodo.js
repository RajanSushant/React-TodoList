import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AddTodo({ onSave }) {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");

	const submitTodo = (event) => {
		event.preventDefault();
		if (!title || !desc) alert("Title or Description Cannot be blank");
		else {
			onSave({ title: title, description: desc });
			setTitle("");
			setDesc("");
		}
	};
	return (
		<div className="mt-4">
			<h3>Add Todo Item</h3>
			<Form onSubmit={submitTodo}>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="text"
						value={title}
						placeholder="Task Title"
						onChange={(t) => {
							setTitle(t.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Description</Form.Label>
					<Form.Control
						as="textarea"
						rows={2}
						value={desc}
						placeholder="Task Description"
						onChange={(t) => {
							setDesc(t.target.value);
						}}
					/>
				</Form.Group>
				<Button type="submit" className="btn-success btn-md">
					Save
				</Button>
			</Form>
		</div>
	);
}
