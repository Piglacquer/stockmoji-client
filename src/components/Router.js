import React from 'react'
import { Router } from '@reach/router'

import LandingPage from '../views/LandingPage'
import LoginPage from '../views/LoginPage'
import CreateAccountPage from '../views/CreateAccountPage'
import Dashboard from '../views/Dashboard'

const Routes = () => {
    return (
        <Router>
            <LandingPage path='/' />
            <LoginPage path='/login' />
            <CreateAccountPage path='/create' />
            <Dashboard path='/home/:id' />
        </Router>
    )
}

export default Routes
