import React, { Component } from 'react'
import {renderSentimentSwitch, renderMagnitudeSwitch} from '../helpers/Emojis'
import '../styles/css/TickerResponse.css'

class TickerResponse extends Component {

  toFixedDecimal = (number) => {
    return number.toFixed(2)
  }

	render() {
    console.log(this.props)
		return (
			<div className='response-emojis-container'>
        <div className='score-response-emoji'>
    			<h2 className='score-emoji'>{renderSentimentSwitch(this.props.sentimentScore.score)}</h2>
          <div className='score-response'>
            <p className='score-response-number'>{this.toFixedDecimal(this.props.sentimentScore.score)}</p>
            <h3 className='score-response-title'>SENTIMENT</h3>
          </div>
        </div>
        <div className='score-response-emoji'>
          <h2 className='score-emoji'>{renderMagnitudeSwitch(this.props.sentimentScore.magnitude)}</h2>
          <div className='score-response'>
            <p className='score-response-number'>{this.toFixedDecimal(this.props.sentimentScore.magnitude)}</p>
            <h3 className='score-response-title'>MAGNITUDE</h3>
          </div>
        </div>
			</div>
		)
	}
}

export default TickerResponse
