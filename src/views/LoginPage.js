import React from 'react'
import Login from '../components/Login'
import LandingAnimation from '../components/LandingAnimation'
import '../styles/css/LoginPage.css'

const LoginPage = () => {
    return (
        <div className='loginPage'>
            <LandingAnimation />
            <Login />
        </div>
    )
}

export default LoginPage