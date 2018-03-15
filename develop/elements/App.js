import React from 'react';
import ToggleButton from './ToggleButton/ToggleButton';
import ToDoList from './ToDoList/ToDoList';
import JqueryComponent from './JqueryComponent/JqueryComponent';

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
				<section>
					Rxjs:
					<ToggleButton />
				</section>
				<section>
					jQuery:
					<JqueryComponent />
				</section>
				<ToDoList />
			</section>
		</div>
	);
}

export default App;
