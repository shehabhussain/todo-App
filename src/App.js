import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="todo-app">
			<header>
				<h1>Shehab's ToDo List</h1>
			</header>
			<Form
				inputText={inputText}
				todos={todos}
				setTodos={setTodos}
				setInputText={setInputText}
			/>
			<TodoList setTodos={setTodos} todos={todos} />
			<div className="footer">
				<p>Made with 🔥🚀 by Shehab Hussain 2021</p>
			</div>
		</div>
	);
}

export default App;
