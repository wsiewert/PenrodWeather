import React, { Component } from 'react';
import { Card } from '@salesforce/design-system-react';

class WeatherCard extends Component {
	render() {

		let cityName = this.props.weather.city;

		return (
			// <li className="WeatherCard">
			// 	{this.props.weather.city} - {this.props.weather.temperature} - {this.props.weather.forecast}
			// 	<Button label="Hello Button" />
			// </li>
			<Card className="WeatherCard slds-m-around_xx-large" heading={cityName}>
				<div className="slds-p-around_small">
					<p>Temperature: {this.props.weather.temperature}</p>
					<p>Forecast: {this.props.weather.forecast}</p>
				</div>
			</Card>
		);
	}
}

export default WeatherCard;
