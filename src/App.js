import React, { Component } from 'react';
import $ from 'jquery';
import { Key } from './keys.js';
import Weather from './components/Weather';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';

class App extends Component {

	constructor(){
		super();
		this.state = {
			weather: []
		}
	}

	getWeather(){  
		  $.ajax({
			url: "http://api.openweathermap.org/data/2.5/group?id=5263045,4887398,5037649,4684888&APPID=" + Key,
			dataType: "json",
			cache: "false"
		  }).done(function (response) {
			this.setState({weather: response.list});
		  }.bind(this)).fail(function (err){
			console.log(err);
		  });
	}

	componentWillMount() {
		this.getWeather();
	}

	render() {
		return (
			<div className="App">
				<div className="slds-page-header">
					<h1 className="slds-page-header__title">Penrod Office Weather</h1>
				</div>
				< Weather weather = {this.state.weather}/>			
      		</div>
		);
	}
}

export default App;
