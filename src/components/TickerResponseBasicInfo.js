import React from 'react'
import '../styles/css/TickerResponseBasicInfo.css'

const TickerResponseBasicInfo = () => {
  return (
    <div className='stock-info-container'>
      <h1 className='stock-name'>{this.props.basicStockData.name}</h1>
      <div className='stock-basic-info-container'>
        <div className='stock-basics-and-price'>
          <div className='stock-info-rows'>
            <div className='stock-info'>
              <h2 className='stock-info-title'>CEO:  </h2>
              <p className='stock-info-desc'>{this.props.basicStockData.ceo}</p>
            </div>
            <div className='stock-info'>
              <h2 className='stock-info-title'>SECTOR: </h2>
              <p className='stock-info-desc'>{this.props.basicStockData.sector}</p>
            </div>
            <div className='stock-info'>
              <h2 className='stock-info-title'>URL: </h2>
              <a className='stock-info-desc' target='_blank' href={this.props.basicStockData.company_url} >{this.props.basicStockData.company_url}</a>
            </div>
          </div>
          <h1 className='stock-price'>{this.props.price}</h1>
        </div>
      </div>
      <div className='stock-description-container'>
        <p className='stock-description'>{this.props.basicStockData.long_description}</p>
      </div>
    </div>
  )
}

export default TickerResponseBasicInfo
