import React, { Component } from 'react'
import './styles/css/TickerInput.css'
import TickerResponse from './TickerResponse.js'
import TickerResponseBasicInfo from './TickerResponseBasicInfo.js'


class TickerInput extends Component {
	constructor(props) {
		super(props)
		this.state = {
			sentimentScore: false,
			ticker: null,
			sentimentDataToSend: {
				content: '',
				type: 'PLAIN_TEXT'
			},
			stockPriceData: null,
			basicStockData: null
		}
	}

	getBasicStockData = (ticker) => {
		fetch('https://api.intrinio.com/companies?ticker='+ticker, {
			headers: new Headers({
				Authorization: "Basic " + new Buffer('dcfac65d3703237d8ccf5698f693e5e9' + ':' + '1c58f8fcdd7c0f63f6e98f649e5365de').toString('base64')
			})
		})
		.then(response => response.json())
		.then(response => {
			this.setState({basicStockData: response})
			console.log(this.state.basicStockData)
		})
	}

	getStockPriceData = (ticker) => {
		fetch('https://api.intrinio.com/prices?ticker='+ticker, {
			headers: new Headers({
				Authorization: "Basic " + new Buffer('dcfac65d3703237d8ccf5698f693e5e9' + ':' + '1c58f8fcdd7c0f63f6e98f649e5365de').toString('base64')
			})
		})
		.then(response => response.json())
		.then(response => this.setState({
			stockPriceData: response
			})
		)
	}

	submitTicker = e => {
		e.preventDefault()
		console.log(this.state.ticker)
		this.getBasicStockData(this.state.ticker)
		console.log("Basic " + new Buffer('dcfac65d3703237d8ccf5698f693e5e9' + ':' + '1c58f8fcdd7c0f63f6e98f649e5365de').toString('base64'))
		this.getStockPriceData(this.state.ticker)
		fetch('https://stockpickeremoji.herokuapp.com/' + this.state.ticker)
			.then(resp => resp.json())
			.then(resp => this.prepareHeadlineData(resp))
			.then(() => {
				this.sentimentAnalysis(this.state.sentimentDataToSend)
			})
		this.setState({ ticker: '' })
	}

	prepareHeadlineData = twitterResp => {
		console.log(twitterResp.tweets.statuses)
		var newTitles = twitterResp.tweets.statuses
			.map(story => {
				return story.text
			})
			.join(' ')
		console.log(newTitles)
		this.setState({
			sentimentDataToSend: {
				content: newTitles,
				type: 'PLAIN_TEXT'
			}
		})
	}

	sentimentAnalysis = data => {
		fetch('https://stockpickeremoji.herokuapp.com/', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: new Headers({
				'content-type': 'application/json'
			})
		})
			.then(resp => resp.json())
			.then(resp => {
				this.setState({
					sentimentScore: resp.message
				})
				console.log(this.state.sentimentScore)
			})
		}

	formatInput = e => {
		var upperCased = e.target.value.toUpperCase()
		this.setState({
			ticker: upperCased
		})
	}

	handleEmptyResponse = () => {
		if (this.state.sentimentScore.magnitude === 0) {
			alert('😓')
		}
	}

	render() {
		return (
			<div className="ticker-input-container">
				<div className='input-and-response'>
					<form type="submit" onSubmit={this.submitTicker}>
						<input
							className="input-ticker"
							placeholder="AMZN"
							type="text"
							maxLength="5"
							value={this.state.ticker || ''}
							name="content"
							onChange={event => {
								this.formatInput(event)
							}}
						/>
						<input className="submit-ticker" type="submit" value="🤓" />
					</form>

					<div>
						{this.state.sentimentScore ? <TickerResponse sentimentScore={this.state.sentimentScore} /> : ''}
					</div>

					<div>{this.state.basicStockData ? <TickerResponseBasicInfo basicStockData={this.state.basicStockData} /> : ''}</div>

				</div>
			</div>
		)
	}
}

export default TickerInput

{/*<div>{this.state.stockPriceData ? <Candlestick stockPriceData = {this.state.stockPriceData} / > : ''}</div>
*/}
