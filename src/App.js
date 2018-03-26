import React, { Component } from 'react'
import './styles/css/App.css'
import TickerInput from './TickerInput.js'
import Header from './Header.js'
import LandingAnimation from './LandingAnimation.js'
import Login from './Login.js'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showLanding: true,
			showHeaderAndInput: false
		}
	}

	switchLandingAndApp= () =>{
		console.log('hey')
		this.setState({
			showLanding: false,
			showHeaderAndInput: true
		})
	}

	render() {
		return (
			<div className="App">
				{this.state.showLanding ? <LandingAnimation /> : ''}
				{this.state.showLanding ? <Login switchLandingAndApp = {this.switchLandingAndApp} /> : ''}
				{this.state.showHeaderAndInput ? <Header /> : ''}
				{this.state.showHeaderAndInput ? <TickerInput /> : ''}
			</div>
		)
	}
}

export default App
