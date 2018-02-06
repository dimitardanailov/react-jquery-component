import React, { Component } from 'react';
import { Subject } from 'rxjs';

class ToggleButton extends Component {
	constructor(props) {
		super(props);

		this.state = { isToggleOn: true };

		this.setToggle = new Subject();
	}

	componentDidMount() {
		this.setToggle.subscribe(prevState => {
			this.setState(() => ({
				isToggleOn: !prevState
			}));
		});
	}

	getToogle() {
		return this.state.isToggleOn;
	}

	render() {
		return (
			<div>
				<button onClick={() => this.setToggle.next(this.getToogle())}>
					{this.state.isToggleOn ? 'ON' : 'OFF'}
				</button>
			</div>
		);
	}
}

export default ToggleButton;
