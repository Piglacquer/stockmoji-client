import React from 'react'
import {navigate} from '@reach/router'
import '../../styles/css/Buttons.css'

const redirectCreateAccount = () => {
    return navigate('/create')
}

const CreateAccountButton = (props) => {
    console.log(props)
    return (
        <button className='button-wide affirmative' onClick={redirectCreateAccount}>
            Create Account
        </button>
    )
}

export default CreateAccountButton