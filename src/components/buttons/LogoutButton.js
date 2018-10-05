import React from 'react'
import {navigate} from '@reach/router'
import '../../styles/css/buttons/Negative.css'

const logout = () => {
    return fetch('http://localhost:3000/auth/logout',{ 
        method: 'GET',
        credentials: 'include'
    })
    .then(navigate('/'))
}

const LogoutButton = () => {
    return (
        <button className='button-negative-wide' onClick={logout}>
            Logout
        </button>
    )
}

export default LogoutButton