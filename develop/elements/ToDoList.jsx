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
		this.currentInput.subscribe(newValue => {
			this.setState(() => ({
				text: newValue
			}));
		});

		this.addTodo.subscribe(event => {
			event.preventDefault();

			let { todos } = this.state;
			const { text } = this.state;
			const index = todos.length + 1;
			todos = todos.concat({
				text,
				index
			});

			this.setState({ todos, text: '' });
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={e => this.addTodo.next(e)}>
					<input
						value={this.state.text}
						onChange={e => this.currentInput.next(e.target.value)}
					/>
					<button type="submit">Add</button>
				</form>

				<ul>
					{this.state.todos.map(task => <li key={task.index}>{task.text}</li>)}
				</ul>
			</div>
		);
	}
}

export default ToDoList;
