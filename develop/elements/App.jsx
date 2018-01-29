import React, {Component} from 'react';
import ToggleButton from './ToggleButton.jsx';
import ToDoList from './ToDoList.jsx';

export default class App extends Component {
  render() {
    return (
			<div>
				<p>
					Application has two subcomponents.<br/>
					These components demonstrate reactive programming advantages.
				</p>
				
				<ToggleButton  />

				<ToDoList />
			</div>
		);
  }
}
