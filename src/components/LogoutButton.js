import React from 'react'
import {navigate} from '@reach/router'

const logout = () => {
    fetch('http://localhost:3000/auth/logout',{ 
        method: 'GET',
        credentials: 'include'
    })
    // .then(resp => resp.json())
    .then(navigate('/'))
}

const LogoutButton = () => {
    return (
        <button onClick={logout}>
            Logout
        </button>
    )
}

export default LogoutButton