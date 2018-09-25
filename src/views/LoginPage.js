import React from 'react'
import Login from '../components/Login'
import '../styles/css/LoginPage.css'
import LandingAnimation from '../components/LandingAnimation'

const LoginPage = () => {
    return (
        <div className='loginPage'>
            <LandingAnimation />
            <Login />
        </div>
    )
}

export default LoginPage