import React from 'react'
import CreateAccount from '../components/CreateAccount'
import Animation from '../components/Animation'
import '../styles/css/views/CreateAccountPage.css'

const CreateAccountPage = () => {
    return (
        <div className='create-account-page'>
            <div className='create-account-info'>
                <Animation 
                    width={Window.innerWidth * 0.9} 
                    height={Window.innerWidth * 0.45} 
                    loop={false}/>
                <CreateAccount />
            </div>
            <div className='hero-image'></div>
        </div>
    )
}

export default CreateAccountPage