import React, { Component } from 'react';
// import { Subject } from 'rxjs';
import $ from 'jquery';

class JqueryComponent extends Component {
	constructor(props) {
		super(props);

		this.state = { isToggleOn: true };

		// this.setToggle = new Subject();
	}

	componentDidMount() {
		this.handleChange = this.handleChange.bind(this);
		$('.isToggleOn').on('click', this.handleChange);
	}

	getToogle() {
		return this.state.isToggleOn;
	}

	handleChange() {
		this.setState(() => ({
			isToggleOn: !this.getToogle()
		}));
	}

	render() {
		return (
			<div>
				<button className="isToggleOn">
					{this.state.isToggleOn ? 'ON' : 'OFF'}
				</button>
			</div>
		);
	}
}

export default JqueryComponent;
