import React, { Component } from 'react';

class WeatherCard extends Component {
	render() {
		return (
			<li className="WeatherCard">
				{this.props.weather.city} - {this.props.weather.temperature} - {this.props.weather.forecast}
      		</li>
		);
	}
}

export default WeatherCard;
