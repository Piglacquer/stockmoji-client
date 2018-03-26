import React, { Component } from 'react'
import './styles/css/Login.css'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			<div className="Login">
        <form onSubmit={this.props.switchLandingAndApp}>
          <label className='label'>USERNAME<input className='input'/></label>
          <label className='label'>PASSWORD<input type='password' className='input'/></label>
          <input className='button-green' type='submit' value='LOGIN' />
          <input className='button-blue' type='submit' value='CREATE NEW USER' />
          <input className='button-blue' type='submit' value='GUEST' />
        </form>
			</div>
		)
	}
}

export default Login
