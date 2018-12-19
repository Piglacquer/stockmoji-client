import React from 'react'
import TickerResponse from './TickerResponse'
import TickerResponseBasicInfo from './TickerResponseBasicInfo'
import StockCard from './StockCard.js'
import Candlestick from '../helpers/Candlestick'

const TickerResponseContainer = (props) => {
  return (
    <div className='container-of-all'>
      <div className='score-and-data-container'>
        {this.props.showAll ? <TickerResponse sentimentScore={this.props.sentimentScore} /> : ''}
        {this.props.showAll ? <TickerResponseBasicInfo basicStockData={this.props.basicStockData} price={this.props.prices} /> : ''}
      </div>
      <div className='data-chart'>
        {this.props.showAll ? <Candlestick setPrices={this.props.setPrices} tickerToPass={this.props.tickerToPass} /> : ''}
      </div>
      {this.props.stockCardShow ? <StockCard price={this.props.prices} sentimentScore={this.props.sentimentScore} /> : ''}
      {this.props.showAll ? <button className='button-green' onClick={this.props.postStockData}>SAVE</button> : ''}
    </div>
  )
}

export default TickerResponseContainer
