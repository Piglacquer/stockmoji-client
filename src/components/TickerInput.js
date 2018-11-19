import React, { Component } from 'react'
import '../styles/css/TickerInput.css'
import TickerResponse from './TickerResponse.js'
import Animation from './Animation'
import TickerResponseBasicInfo from './TickerResponseBasicInfo.js'
import Candlestick from '../helpers/Candlestick'
import StockCard from './StockCard.js'

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
			basicStockData: false,
			tickerToPass: null,
			stockCardShow: false,
			showAll: false,
			prices: 0.1,
			loading: false
		}
	}

	setPrices = (data) => {
		this.setState({
			prices:data
		})
	}

	getBasicStockData = (ticker) => {
		fetch(`https://api.intrinio.com/companies?ticker=${ticker}`, {
			headers: new Headers({
				Authorization: 'Basic ' + new Buffer('dcfac65d3703237d8ccf5698f693e5e9' + ':' + '1c58f8fcdd7c0f63f6e98f649e5365de').toString('base64')
			})
		})
		.then(response => response.json())
		.then(response => {
			this.setState({
				basicStockData: response
			})
		})
		.then(() => this.getStockPriceData(ticker))
	}

	getStockPriceData = (ticker) => {
		fetch(`https://api.intrinio.com/prices?ticker=${ticker}`, {
			headers: new Headers({
				Authorization: 'Basic ' + new Buffer('dcfac65d3703237d8ccf5698f693e5e9' + ':' + '1c58f8fcdd7c0f63f6e98f649e5365de').toString('base64')
			})
		})
		.then(response => response.json())
		.then(response => this.setState({
			prices: response.data[0].close
			})
		)
		.then(() => console.log(this.state.prices, 'state of prices'))
	}

	postStockData = () => {
		var objToPost = {
			ticker: this.state.ticker,
			score: this.state.sentimentScore.score,
			magnitude: this.state.sentimentScore.magnitude,
			price: this.state.prices,
			date: new Date
		}
		console.log(objToPost)
		fetch('http://localhost:3000/stocks', {
			method: 'POST',
			credentials: 'include',
			body:JSON.stringify(objToPost),
			headers: new Headers({
				'Content-type':'application/json'
			})
		})
		.then(resp => resp.json())
		.then(resp => console.log(resp))
		.then(() => this.killScreenAndRenderSavedCard())
	}

	submitTicker = e => {
		e.preventDefault()
		this.setState({tickerToPass: this.state.ticker, loading: true})
		this.getBasicStockData(this.state.ticker)

		fetch('https://stockpickeremoji.herokuapp.com/' + this.state.ticker)
			.then(resp => resp.json())
			.then(resp => this.prepareHeadlineData(resp))
			.then(() => {
				this.sentimentAnalysis(this.state.sentimentDataToSend)
				this.setState({
					stockCardShow:false
				})
			})
	}

	formatInput = e => {
		var upperCased = e.target.value.toUpperCase()
		this.setState({
			ticker: upperCased
		})
	}

	prepareHeadlineData = twitterResp => {
		var newTitles = twitterResp.tweets.statuses
			.map(story => {
				return story.text
			})
			.join(' ')
		this.setState({
			sentimentDataToSend: {
				content: newTitles,
				type: 'PLAIN_TEXT'
			}
		})
	}

	loadingAwait = () => {
		return new Promise((resolve) => {
			setTimeout(resolve, 2000)
		})
	}

	sentimentAnalysis = data => {
		Promise.all([
			this.loadingAwait(), 
			fetch('https://stockpickeremoji.herokuapp.com/', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: new Headers({
				'content-type': 'application/json'
			})
		})
		.then(resp => resp.json())
	])
		.then(([_,resp]) => {
			this.setState({
				sentimentScore: resp.message,
				showAll: true,
				loading: false
			})
		})
	}

	handleEmptyResponse = () => {
		if (this.state.sentimentScore.magnitude === 0) {
			alert('😓')
		}
	}

	killScreenAndRenderSavedCard = () => {
		console.log('killscreen')
		this.setState({
			showAll: false,
			stockCardShow: true
		})
		return <StockCard />
	}

	responseContainer = () => {
		return (
			<div className='container-of-all'>
					<div className='score-and-data-container'>

						{this.state.showAll ? <TickerResponse sentimentScore={this.state.sentimentScore} /> : ''}


						{this.state.showAll ? <TickerResponseBasicInfo basicStockData={this.state.basicStockData} price={this.state.prices} /> : ''}

					</div>
					<div className='data-chart'>
						{this.state.showAll ? <Candlestick setPrices={this.setPrices} tickerToPass={this.state.tickerToPass} /> : ''}
					</div>

					{this.state.stockCardShow ? <StockCard price = {this.state.prices} sentimentScore={this.state.sentimentScore}/> : ''}

					{this.state.showAll ? <button className='button-green' onClick={this.postStockData}>SAVE</button> : ''}

				</div>
		)
	}

	render() {
		return (
			<div className='input-response-container'>
				<div className='input-form-container'>
					<form className='input-form' type='submit' onSubmit={this.submitTicker}>
						<input
							className='input-ticker'
							placeholder='AMZN'
							type='text'
							maxLength='5'
							value={this.state.ticker || ''}
							name='content'
							onChange={event => {
								this.formatInput(event)
							}}
						/>
						<input className='submit-ticker' type='submit' value='G🤓!' />
					</form>
				</div>
				{this.state.loading ? <Animation loading={true} height={300} width={300} loop={true}	/> : this.responseContainer()}
			</div>
		)
	}
}

export default TickerInput
