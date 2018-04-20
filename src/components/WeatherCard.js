import React, { Component } from 'react';
import { Button, Card } from '@salesforce/design-system-react';

class WeatherCard extends Component {
	render() {
		return (
			// <li className="WeatherCard">
			// 	{this.props.weather.city} - {this.props.weather.temperature} - {this.props.weather.forecast}
			// 	<Button label="Hello Button" />
			  // </li>
			<div className="slds-card">
				<Card id="test">
					Hello!
				</Card>
			</div>
		);
	}
}

export default WeatherCard;
