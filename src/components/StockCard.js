import React, { Component } from 'react'
import {renderSentimentSwitch, renderMagnitudeSwitch} from '../helpers/Emojis'
import '../styles/css/StockCard.css'
import LogoutButton from './LogoutButton'

class StockCard extends Component{
  constructor(props) {
		super(props)
		this.state = {

		}
	}

  componentDidMount(){
    this.getDbItems()
  }

  createCards = (array) => {
    return array.map(item => {
      return (
        <div className='card-container' key={item.id}>
          <div className='ticker-date'>
            <h1 className='ticker' >{item.ticker}</h1>
            <h2 className='date' >{item.created_at.slice(0,10)}</h2>
          </div>
          <div className='sentiments-price'>
            <div className='sentiment-scores'>
              <div className='score'>
                <p className='sentiment-emoji'> {renderSentimentSwitch(item.score)}</p>
                <p className='sentiment'>{item.score}</p>
              </div>
              <div className='score'>
                <p className='sentiment-emoji'> {renderMagnitudeSwitch(item.magnitude)}</p>
                <p className='sentiment'>{item.magnitude}</p>
              </div>
            </div>
            <h2 className='price'>{item.price}</h2>
          </div>
        </div>
      )
    })
  }
  getDbItems = () => {
    fetch('https://stockmoji-db.herokuapp.com/', {
      headers: new Headers({
        'content-type': 'application/json'
      })
    })
    .then(resp => resp.json())
    .then(resp => {
      this.setState({
        dbItems:resp.data
      })
    })
    .then(() => console.log(this.state.dbItems))
  }

  render(){
    return(
      <React.Fragment>
      <LogoutButton />
      {this.state.dbItems ? this.createCards(this.state.dbItems) : null}
      </React.Fragment>
    )
  }
}

export default StockCard
