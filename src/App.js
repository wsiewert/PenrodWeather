import React, { Component } from 'react';
import Weather from './components/Weather';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';

class App extends Component {

	constructor(){
		super();
		this.state = {
			weather: []
		}
	}

	getFarhrenheitByKelvin(kelvin){
		let farhrenheitTemp = (9/5)*(kelvin - 273) + 32;
		return farhrenheitTemp;
	}

	getWeather(){
		//ajax to weather API instead of below
		this.setState({
			weather: [
				{
					city: "Milwaukee",
					temperature: 75,
					forecast: "sunny",
					address: "123 City Street, WI"
				},
				{
					city: "City 2",
					temperature: 75,
					forecast: "sunny",
					address: "123 City Street, WI"					
				},
				{
					city: "City 3",
					temperature: 75,
					forecast: "sunny",
					address: "123 City Street, WI"					
				},
				{
					city: "City 4",
					temperature: 75,
					forecast: "sunny",
					address: "123 City Street, WI"					
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
				<div className="slds-page-header">
					<h1 className="slds-page-header__title">Penrod Office Weather</h1>
				</div>
				< Weather weather = {this.state.weather}/>			
      		</div>
		);
	}
}

export default App;
