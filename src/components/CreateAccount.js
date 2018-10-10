import React, {Component} from 'react'

class CreateAccount extends Component {
    constructor(props) {
		super(props)
		this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
            passwordsMatch: true
		}
	}

    render(){
        return(
            <React.Fragment>
                <label></label>
                <input type='text'></input>
                <label></label>
                <input type='password'></input>
                <label></label>
                <input type='password'></input>
            </React.Fragment>
        )
    }
}

export default CreateAccount