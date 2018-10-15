import React from 'react'
import Login from '../components/Login'
import Animation from '../components/Animation'
import '../styles/css/LoginPage.css'

const LoginPage = () => {
    return (
        <div className='landing'>
            <div className='landing-hero-description'>
                <div className='hero-half' />
                <div className='login-half'>
                    <Animation height={300} width={700} loop={false}/>
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default LoginPage