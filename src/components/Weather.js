import React, { Component } from 'react';
import WeatherCard from './WeatherCard';
// import { Button, Card } from '@salesforce/design-system-react';


class Weather extends Component {
	render() {
        let weatherCards;

        if(this.props.weather){
            weatherCards = this.props.weather.map( weather => {
                return (
                    < WeatherCard key = {weather.city} weather = {weather}/>
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
