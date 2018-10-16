import React, {Component} from 'react'
import '../styles/css/CreateAccount.css'

class CreateAccount extends Component {
    constructor(props) {
		super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            passwordConfirm: '',
            passwordsMatch: true
		}
	}

    render(){
        return(
            <div className='account-form'>
                <form>
                    <label>Email</label>
                    <input type='text'></input>
                    <label>Username</label>
                    <input type='text'></input>
                    <label>Password</label>
                    <input type='password'></input>
                    <label>Password Match</label>
                    <input type='password'></input>
                </form>
            </div>
        )
    }
}

export default CreateAccount