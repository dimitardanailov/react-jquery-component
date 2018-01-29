import React, {Component} from 'react';
import { Subject } from 'rxjs';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = { isToggleOn: true };

		this.handleClick = new Subject();
	}

	componentDidMount() {
		this.handleClick.subscribe((prevState) => {
			this.setState(prevState => ({
				isToggleOn: !prevState.isToggleOn
			}));
		});
	}

  render() {
    return (
			<div>
				<button onClick={() => this.handleClick.next(this.state.isToggleOn)}>
					{this.state.isToggleOn ? 'ON': 'OFF'}
				</button>
			</div>
		);
  }
}
