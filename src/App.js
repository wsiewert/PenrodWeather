import React, { Component } from 'react';
import Weather from './components/Weather'
import './App.css';

class App extends Component {

	constructor(){
		super();
		this.state = {
			weather: []
		}
	}

	componentWillMount() {
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

	render() {
		return (
			<div className="App">
				< Weather weather = {this.state.weather}/>
      		</div>
		);
	}
}

export default App;
