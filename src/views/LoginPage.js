import React from 'react'
import Login from '../components/Login'
import LandingAnimation from '../components/LandingAnimation'
import '../styles/css/LoginPage.css'

const LoginPage = () => {
    return (
        <div className='landing'>
            <div className='landing-hero-description'>
                <img className='hero-half' src='https://themorningnews.org/images/content/gallery/0225.jpg' alt='tree-rings'/>
                <div className='login-half'>
                    <LandingAnimation height={300} width={600}/>
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default LoginPage