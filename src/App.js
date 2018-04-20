import React, { Component } from 'react';
import Weather from './components/Weather';
// import './App.css';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';

class App extends Component {

	constructor(){
		super();
		this.state = {
			weather: []
		}
	}

	getWeather(){
		//ajax to weather API instead of below
		this.setState({
			weather: [
				{
					city: "City 1",
					temperature: 75,
					forecast: "sunny"
				},
				{
					city: "City 2",
					temperature: 75,
					forecast: "sunny"
				},
				{
					city: "City 3",
					temperature: 75,
					forecast: "sunny"
				},
				{
					city: "City 4",
					temperature: 75,
					forecast: "sunny"
				}
			]
		});
	}

	componentWillMount() {
		this.getWeather();
	}

	componentDidMount(){
		//State after component renders
	}

	render() {
		return (
			<div className="App">
				< Weather weather = {this.state.weather}/>			
      		</div>
		);
	}
}

export default App;
