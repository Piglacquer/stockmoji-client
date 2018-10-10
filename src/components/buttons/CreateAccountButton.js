import React from 'react'
import {navigate} from '@reach/router'
import '../../styles/css/Buttons.css'

const redirectCreateAccount = () => {
    return navigate('/create')
}

const CreateAccountButton = () => {
    return (
        <button className='button-wide affirmative' onClick={redirectCreateAccount}>
            Create Account
        </button>
    )
}

export default CreateAccountButton