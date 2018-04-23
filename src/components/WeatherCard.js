import React, { Component } from 'react';
import { Card, Button } from '@salesforce/design-system-react';

class WeatherCard extends Component {
	render() {

		let cityName = this.props.city.name;
		let cityAddress = this.props.city.address;
		let mapLink = encodeURI("https://www.google.com/maps/search/?api=1&query=" + cityAddress);
		let temperature = getFarhrenheitByKelvin(this.props.weather.main.temp);
		let temperatureHI = getFarhrenheitByKelvin(this.props.weather.main.temp_max);
		let temperatureLO = getFarhrenheitByKelvin(this.props.weather.main.temp_min);
		let humidity = this.props.weather.main.humidity;

		function getFarhrenheitByKelvin(kelvin){
			let farhrenheitTemp = (9/5)*(kelvin - 273) + 32;
			return Math.round(farhrenheitTemp);
		}

		return (
			<div className="slds-col slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_3-of-12"> 
				<Card className="WeatherCard slds-m-around_xx-large"
					heading={cityName}
					headerActions={
						<Button>
							<a href={mapLink}> Map </a>
						</Button>
					}
					footer={cityAddress}
				>
					<div className="slds-p-around_small">
						<p>Temperature: {temperature} &#x2109;</p>
						<p>HI: {temperatureHI} &#x2109;</p>
						<p>LO: {temperatureLO} &#x2109;</p>
						<p>Humidity: {humidity} %</p>				
					</div>
				</Card>
			</div>
		);
	}
}

export default WeatherCard;
