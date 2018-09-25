import React from 'react'
import {Router} from '@reach/router'

import LoginPage from '../views/LoginPage'
import StockCard from '../components/StockCard'

const Routes = () => {
    return (
        <Router>
            <LoginPage path='/' />
            <StockCard path='/home/:id' />
        </Router>
    )}

export default Routes