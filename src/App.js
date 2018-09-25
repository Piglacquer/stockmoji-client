import React, { Component } from 'react'
import './styles/css/App.css'
import TickerInput from './components/TickerInput.js'
import Header from './components/Header.js'
import LandingAnimation from './components/LandingAnimation.js'
import Login from './components/Login.js'
import Routes from './components/Router'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showLanding: true,
			showHeaderAndInput: false
		}
	}

	switchLandingAndApp = () =>{
		this.setState({
			showLanding: false,
			showHeaderAndInput: true
		})
	}

	render() {
		return (
			<div className="App">
				<Routes />
				{/* {this.state.showLanding ? <LandingAnimation /> : ''}
				{this.state.showLanding ? <Login switchLandingAndApp = {this.switchLandingAndApp} /> : ''}
				{this.state.showHeaderAndInput ? <Header /> : ''}
				{this.state.showHeaderAndInput ? <TickerInput /> : ''} */}
			</div>
		)
	}
}

export default App
