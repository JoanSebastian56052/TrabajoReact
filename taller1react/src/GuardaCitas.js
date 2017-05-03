import React, {Component} from 'react';

export default class GuardaCitas extends Component {
	render() {
		return(

			<ul>
			 {this.props.citas.map(citas => (
          <li key={citas.title}>{citas.title + ' ' + citas.start}</li>
        ))}

			</ul>
		);
	}
}