import React, { Component } from 'react'
import './styles/css/StockCard.css'

class StockCard extends Component{
  render(){
    return(
      <div className='card-container'>
        <div className='emoji-container'>
          <p>{this.props.sentimentScore.score}</p>
          <p>{this.props.sentimentScore.magnitude}</p>
        </div>
        <div className='stock-container'>
        </div>
      </div>
    )
  }
}

export default StockCard
