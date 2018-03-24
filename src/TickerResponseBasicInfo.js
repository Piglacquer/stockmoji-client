import React, { Component } from 'react'

class TickerResponseBasicInfo extends Component {
  render(){
    return(
      <div>
        <div className='stock-basic-info'>
          <h1>{this.props.basicStockData.name}</h1>
          <p>CEO: {this.props.basicStockData.ceo}</p>
          <p>SECTOR: {this.props.basicStockData.sector}</p>
          <p>{this.props.basicStockData.company_url}</p>
          <p>{this.props.basicStockData.long_description}</p>
        </div>
      </div>
    )
  }
}

export default TickerResponseBasicInfo
