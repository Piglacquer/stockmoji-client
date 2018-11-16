import React, {Component} from 'react'
import {navigate} from '@reach/router'
import '../styles/css/CreateAccount.css'

class CreateAccount extends Component {
    constructor(props) {
		super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            message: ''
		}
	}

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    createUser = (e) => {
        e.preventDefault()
        let user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }
        return fetch('http://localhost:3000/auth/signup',
            {	
                method: 'POST',
                body: JSON.stringify(user),
                headers:{'Content-Type': 'application/json'}
            })
                .then(resp => resp.json())
                .then(resp => {
                    if (resp.id){
                        navigate('/login')
                    }
                })
    }

    render(){
        return(
            <div className='account-form'>
                <form className='form-inputs' onSubmit={this.createUser}>
                    <label>Email<input name='email' type='text' onChange={this.changeHandler} value={this.state.email}></input></label>
                    <label>Username<input name='username' type='text' onChange={this.changeHandler} value={this.state.username}></input></label>
                    <label>Password<input name='password' type='password' onChange={this.changeHandler} value={this.state.password}></input></label>
                    <input type='submit' value='Create User'/>
                </form>
            </div>
        )
    }
}

export default CreateAccount