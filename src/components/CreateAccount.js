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
                <form className='form-inputs'>
                    <label>Email<input type='text'></input></label>
                    <label>Username<input type='text'></input></label>
                    <label>Password<input type='password'></input></label>
                    <label>Password Match<input type='password'></input></label>
                </form>
            </div>
        )
    }
}

export default CreateAccount