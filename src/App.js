import React, { Component } from 'react'
import './styles/css/App.css'
import Routes from './components/Router'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {
		return (
			<div className="App">
				<Routes />
			</div>
		)
	}
}

export default App
