import React, { Component } from 'react';
import ToggleButton from './ToggleButton.jsx';
import ToDoList from './ToDoList.jsx';

class App extends Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						{'These components demonstrate reactive programming advantages.'}
					</li>
					<li>Application has two subcomponents.</li>
				</ul>
				<section>
					<ToggleButton />
					<ToDoList />
				</section>
			</div>
		);
	}
}

export default App;
