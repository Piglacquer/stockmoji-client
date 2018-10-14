import React, { Component } from 'react'
import {navigate} from '@reach/router'
import '../styles/css/Buttons.css'
import '../styles/css/Login.css'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: {
				username: '',
				password: ''
			},
			loggedIn: false,
			message: null,
			loading: false
		}
	}
	
	loginPost = (object) => {
		this.setState({loading: true})
		return fetch('http://localhost:3000/auth/login',
		{	
			method: 'POST',
			body: JSON.stringify(object),
			credentials: 'include',
			headers:{'Content-Type': 'application/json'}
		})
			.then(resp => resp.json())
			.then(resp => {
				console.log(resp)
				if(resp.userId){
					navigate(`/home/${resp.userId}`)
				}
			})
			.catch(console.error)
	}

	createUserPost = (object) => {
		return fetch('http://localhost:3000/auth/signup',
		{	
			method: 'POST',
			body: JSON.stringify(object),
			headers:{'Content-Type': 'application/json'}
		})
			.then(resp => resp.json())
	}

	isLoggedIn = () => {
		return fetch('http://localhost:3000/auth',
		{	
			method: 'GET',
			credentials: 'include'
		})
			.then(resp => resp.json())
			.then(resp => {
				if(resp.loggedIn){
					return navigate(`/home/${resp.userId}`)
				} 
				return resp
			})
	}

	loginForm = () => {
		return(
		<div className="Login">
			<div className='form'>
				<label className='label'>USERNAME
					<input className='input' value={this.state.user.username} onChange={(e) => 
						this.setState({user: {...this.state.user, username: e.target.value}
					})}/>
				</label>
				<label className='label'>PASSWORD
					<input value={this.state.user.password} onChange={(e) => 
						this.setState({ user: {...this.state.user, password: e.target.value}})}type='password' className='input'/>
				</label>
				<button className='button-wide affirmative' onClick={() => this.loginPost(this.state.user)}>LOGIN</button>
				<button className='button-wide neutral' onClick={() => this.createUserPost(this.state.user)}>CREATE NEW USER</button>
			</div>
		</div>
		)
	}
	componentDidMount(){
		this.isLoggedIn()
	}

	render() {
		return (
			<React.Fragment>
				{!this.state.loading ? this.loginForm() : null}
			</React.Fragment>
		)
	}
}

export default Login
