import React from 'react';
import ToggleButton from './ToggleButton.jsx';
import ToDoList from './ToDoList.jsx';

/**
 * Article: React Stateless Functional Components:
 * Nine Wins You Might Have Overlooked
 *
 * URL: https://hackernoon.com/997b0d933dbc
 */
function App() {
	return (
		<div>
			<ul>
				<li>These components demonstrate reactive programming advantages.</li>
				<li>Application has two subcomponents.</li>
			</ul>
			<section>
				<ToggleButton />
				<ToDoList />
			</section>
		</div>
	);
}

export default App;
