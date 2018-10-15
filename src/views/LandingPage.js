import React from 'react'
import Animation from '../components/Animation'
import LoginButton from '../components/buttons/LoginButton'
import CreateAccountButton from '../components/buttons/CreateAccountButton'
import '../styles/css/views/LoginPage.css'


const LandingPage = () => {
    return (
        <React.Fragment>
            <Animation width={1200} height={600} loop={false}/>
            <div>
                <LoginButton />
                <CreateAccountButton />
            </div>
        </React.Fragment>
    )
}

export default LandingPage