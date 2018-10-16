import React from 'react'
import Animation from '../components/Animation'
import LoginButton from '../components/buttons/LoginButton'
import CreateAccountButton from '../components/buttons/CreateAccountButton'
import '../styles/css/views/LandingPage.css'


const LandingPage = () => {
    return (
        <div className='landing-page'>
            <Animation 
                width={Window.innerWidth * 0.9} 
                height={Window.innerWidth * 0.45} 
                loop={false}/>
            <div className='landing-buttons'>
                <LoginButton />
                <CreateAccountButton />
            </div>
        </div>
    )
}

export default LandingPage