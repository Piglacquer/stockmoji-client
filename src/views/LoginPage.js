import React from 'react'
import Login from '../components/Login'
import LandingAnimation from '../components/LandingAnimation'
import '../styles/css/LoginPage.css'

const LoginPage = () => {
    return (
        <div className='landing'>
            <div className='landing-hero-description'>
                <div className='hero-half' />
                <div className='login-half'>
                    <LandingAnimation height={300} width={700}/>
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default LoginPage