import React from 'react';
import { Subject } from 'rxjs';

class ToDoList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [],
			text: ''
		};

		this.currentInput = new Subject();
		this.addTodo = new Subject();
	}

	componentDidMount() {
		this.currentInput.subscribe((newValue) => {
			this.setState(() => ({
				text: newValue
			}));
		});

		this.addTodo.subscribe(() => {
			let { todos, text } = this.state;
			todos = todos.concat({ text });

			this.setState({ todos, text: '' });
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={() => this.addTodo.next()} action="javascript:">
					<input value={this.state.text} onChange={(e) => this.currentInput.next(e.target.value)} />
					<button type="submit">Add</button>
				</form>

				<ul>
					{this.state.todos.map((todo, index) => (
						<li key={index}>{todo.text}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default ToDoList;
