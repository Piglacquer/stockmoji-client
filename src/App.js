import React, { Component } from 'react'
import './styles/css/App.css'
import TickerInput from './TickerInput.js'
import Header from './Header.js'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<TickerInput />
			</div>
		)
	}
}

export default App
