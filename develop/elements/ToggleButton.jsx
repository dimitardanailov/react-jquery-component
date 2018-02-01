import React, { Component } from 'react';
import { Subject } from 'rxjs';

class ToggleButton extends Component {
	constructor(props) {
		super(props);

		this.state = { isToggleOn: true };

		this.updateToggleProperty = new Subject();
	}

	componentDidMount() {
		this.updateToggleProperty.subscribe(prevState => {
			this.setState(() => ({
				isToggleOn: !prevState.isToggleOn
			}));
		});
	}

	render() {
		return (
			<div>
				<button onClick={() => this.updateToggleProperty.next(this.state.isToggleOn)}>
					{this.state.isToggleOn ? 'ON' : 'OFF'}
				</button>
			</div>
		);
	}
}

export default ToggleButton;
