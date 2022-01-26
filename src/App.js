import "./App.css";
import { useState, useEffect } from "react";
import Header from "./myComponents/header.js";
import Todos from "./myComponents/todos.js";
import Footer from "./myComponents/footer.js";
import About from "./myComponents/About.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	let initTodo;
	if (localStorage.getItem("todos") === null) {
		initTodo = [];
	} else {
		initTodo = JSON.parse(localStorage.getItem("todos"));
	}
	const [todos, setTodos] = useState(initTodo);

	const removeTodoItem = (todo) => {
		setTodos(
			todos.filter((t) => {
				return t !== todo;
			})
		);
	};
	const addTodoItem = (todo) => {
		todos.Number = todos.length + 1;
		setTodos(todos.concat(todo));
	};
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	});
	return (
		<>
			<Router>
				<Header title={"My Todos List"} searchBar={true} />

				<Routes>
					<Route
						path="/"
						element={
							<Todos
								todos={todos}
								onDelete={removeTodoItem}
								onSave={addTodoItem}
								alt="No Todos to display"
							/>
						}
					/>
					<Route path="/about" element={<About />} />
				</Routes>

				<Footer />
			</Router>
		</>
	);
}

export default App;
