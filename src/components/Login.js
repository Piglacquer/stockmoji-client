import React, { Component } from 'react'
import {navigate} from '@reach/router'
import '../styles/css/Login.css'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: {
				username: '',
				password: ''
			}
		}
	}
	
	loginPost = (object) => {
		console.log(JSON.stringify(object))
		fetch('http://localhost:3000/auth/login',
		{	method: 'POST',
			body: JSON.stringify(object),
			headers:{'Content-Type': 'application/json'}
		})
			.then(resp => resp.json())
			.then(resp => {
				console.log('resp', resp)
				if(resp){
					console.log("i made it here")
					navigate(`/home/${resp}`)
				}
			})
	}

	createUserPost = (object) => {
		fetch('http://localhost:3000/auth/signup',
		{	method: 'POST',
			body: JSON.stringify(object),
			headers:{'Content-Type': 'application/json'}
		})
			.then(resp => resp.json())
			.then(resp => console.log(resp))
	}

	render() {
		return (
			<div className="Login">
				<div className='form'>
					<label className='label'>USERNAME
						<input className='input' value={this.state.user.username} onChange={(e) => 
							this.setState({user: {... this.state.user, username: e.target.value}
						})}/>
					</label>
					<label className='label'>PASSWORD
						<input value={this.state.user.password} onChange={(e) => 
							this.setState({ user: {... this.state.user, password: e.target.value}})}type='password' className='input'/>
					</label>
					<button className='button-green' onClick={() => this.loginPost(this.state.user)}>LOGIN</button>
					<button className='button-blue' onClick={() => this.createUserPost(this.state.user)}>CREATE NEW USER</button>
				</div>
			</div>
		)
	}
}

export default Login
