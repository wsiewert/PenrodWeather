import React, { Component } from 'react';
import WeatherCard from './WeatherCard';

class Weather extends Component {
	render() {
        let weatherCards;
        if(this.props.weather){
            weatherCards = this.props.weather.map( weather => {
                // console.log(weatherCard);
                return (
                    < WeatherCard key = {weather.city} weather = {weather}/>
                );
            });
        }
		return (
			<div className="Weather">
				{weatherCards}
            </div>
		);
	}
}

export default Weather;
