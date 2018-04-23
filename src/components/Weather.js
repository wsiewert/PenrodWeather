import React, { Component } from 'react';
import WeatherCard from './WeatherCard';

class Weather extends Component {
	render() {
        let weatherCards;
        let cities = [
            {
                name: "Milwaukee",
                address: "219 N. Milwaukee St., 2nd Floor, Milwaukee WI 53202"
            },
            {
                name: "Chicago",
                address: "320 W Ohio Street, Suite 3W Chicago, IL 60654"
            },
            {
                name: "Minneapolis",
                address: "60 South 6th St, Suite 2800 Minneapolis, MN 55402"
            },
            {
                name: "Dallas",
                address: "3102 Oak Lawn Avenue, Suite 650 Dallas, Texas 75219"
            }
        ];

        if(this.props.weather){
            weatherCards = this.props.weather.map(function weather(currentElement, currentIndex) {
                return (
                    <WeatherCard key={currentIndex} weather={currentElement} city={cities[currentIndex]}/>
                );
            });
        }

		return (
			<div className="slds-grid slds-wrap">
				{weatherCards}
            </div>
		);
	}
}

export default Weather;
