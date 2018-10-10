import React from 'react'
import LandingAnimation from '../components/LandingAnimation'
import LoginButton from '../components/buttons/LoginButton'
import CreateAccountButton from '../components/buttons/CreateAccountButton'
import '../styles/css/views/LoginPage.css'


const LandingPage = () => {
    return (
        <React.Fragment>
            <LandingAnimation width={1200} height={600} />
            <div>
                <LoginButton />
                <CreateAccountButton />
            </div>
        </React.Fragment>
    )
}

export default LandingPage