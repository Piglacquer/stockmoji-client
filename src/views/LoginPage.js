import React from 'react'
import Login from '../components/Login'
import Animation from '../components/Animation'
import '../styles/css/views/LoginPage.css'

const LoginPage = () => {
    return (
        <div className='login-page'>
            <div className='login-hero-description'>
                <div className='hero-half'></div>
                <div className='login-half'>
                    <Animation 
                        height={(Window.innerWidth * 0.5) * 0.9} 
                        width={(Window.innerWidth * 0.5) * 0.45} 
                        loop={false}/>
                    <Login />
                </div>
            </div>
        </div> 
    )
}

export default LoginPage