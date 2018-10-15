import React, {Component} from 'react'
import TickerInput from '../components/TickerInput'
import LogoutButton from '../components/buttons/LogoutButton'
import Animation from '../components/Animation'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <React.Fragment>
                <h1>Dashboard</h1>
                <LogoutButton />
                <TickerInput />
            </React.Fragment>
        )
    }
}

export default Dashboard