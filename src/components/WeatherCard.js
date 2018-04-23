import React, { Component } from 'react';
import { Card } from '@salesforce/design-system-react';

class WeatherCard extends Component {
	render() {

		let cityName = this.props.weather.city;
		let cityAddress = this.props.weather.address;

		return (
			// <li className="WeatherCard">
			// 	{this.props.weather.city} - {this.props.weather.temperature} - {this.props.weather.forecast}
			// 	<Button label="Hello Button" />
			// </li>
			<div className="slds-col slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_3-of-12"> 
				<Card className="WeatherCard slds-m-around_xx-large" heading={cityName} footer={cityAddress}>
					<h2>&#x2109;</h2>
					<div className="slds-p-around_small">
						<p>Temperature: {this.props.weather.temperature}</p>
						<p>Forecast: {this.props.weather.forecast}</p>
						<p></p>
						<p></p>
						<p></p>						
					</div>
				</Card>
			</div>

		);
	}
}

export default WeatherCard;
