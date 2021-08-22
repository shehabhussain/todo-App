import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
	const inputTextHandler = (e) => {
		console.log(e.target.value);
		setInputText(e.target.value);
	};
	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{
				text: inputText,
				completed: false,
				id: Math.random() * 1000,
			},
		]);
		setInputText("");
	};
	return (
		<div className="form-div">
			<form className="todo-form">
				<input
					value={inputText}
					onChange={inputTextHandler}
					type="text"
					className="todo-input"
				/>
				<button
					disabled={!inputText}
					onClick={submitTodoHandler}
					className="todo-button"
					type="submit"
				>
					{" "}
					Add ToDo
				</button>
			</form>
		</div>
	);
};

export default Form;
