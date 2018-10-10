import React from 'react'
import {navigate} from '@reach/router'
import '../../styles/css/Buttons.css'

const logout = () => {
    return fetch('http://localhost:3000/auth/logout',{ 
        method: 'GET',
        credentials: 'include'
    })
    .then(navigate('/'))
}

const LogoutButton = () => {
    return (
        <button className='button-wide negative' onClick={logout}>
            Logout
        </button>
    )
}

export default LogoutButton