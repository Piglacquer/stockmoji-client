import React, { Component } from 'react'
import '../styles/css/Login.css'



class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: {
				username: '',
				passwd: ''
			}
		}
	}
	
	loginPost = (e, object) => {
		e.preventDefault()
		console.log(JSON.stringify(object))
		fetch('http://localhost:3000/login',
		{
			method: 'POST',
			body: JSON.stringify(object), // data can be `string` or {object}!
			headers:
				{
				'Content-Type': 'application/json'
				}
		})
			.then(resp => console.log(resp)
			)}

	render() {
		return (
			<div className="Login">
				<form onSubmit={(e) => this.loginPost(e, this.state.user)}>
				<label className='label'>USERNAME<input className='input' value={this.state.user.username} onChange={(e) => this.setState({
					user: {... this.state.user, username: e.target.value}
				})}/></label>
				<label className='label'>PASSWORD<input value={this.state.user.password} onChange={(e) => this.setState({ user: {... this.state.user, passwd: e.target.value}})}type='password' className='input'/></label>
				<input className='button-green' type='submit' value='LOGIN' />
				<input className='button-blue' type='submit' value='CREATE NEW USER' />
				<input className='button-blue' type='submit' value='GUEST' />
				</form>
			</div>
		)
	}
}

export default Login
