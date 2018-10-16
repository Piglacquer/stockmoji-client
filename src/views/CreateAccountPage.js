import React from 'react'
import CreateAccount from '../components/CreateAccount'
import '../styles/css/views/CreateAccountPage.css'

const CreateAccountPage = () => {
    return (
        <div className='create-account-page'>
            <CreateAccount />
            <div className='hero-image'></div>
        </div>
    )
}

export default CreateAccountPage