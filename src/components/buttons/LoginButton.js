import React from 'react'
import {navigate} from '@reach/router'
import '../../styles/css/Buttons.css'

const login = () => {
    return navigate('/login')
}

const LoginButton = () => {
    return (
        <button className='button-wide affirmative' onClick={login}>
            Login
        </button>
    )
}

export default LoginButton