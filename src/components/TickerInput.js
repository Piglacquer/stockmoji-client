import React, { Component } from 'react'
import '../styles/css/TickerInput.css'
import Animation from './Animation'
import TickerResponseContainer from './TickerResponseContainer'
import StockCard from './StockCard'

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
		return this.setState({
			prices:data
		})
	}

	getStockPriceData = (ticker) => {
		return fetch(`https://api.iextrading.com/1.0/stock/${ticker}/batch?types=quote,company,chart&range=1m&last=1`)
			.then(response => response.json())
			.then(response => this.setState({
				prices: response.chart,
				basicStockData: response.company
				})
			)
		}

	postStockData = () => {
		let objToPost = {
			ticker: this.state.ticker,
			score: this.state.sentimentScore.score,
			magnitude: this.state.sentimentScore.magnitude,
			price: this.state.prices,
			date: new Date
		}
		return fetch('http://localhost:3000/stocks', {
			method: 'POST',
			credentials: 'include',
			body:JSON.stringify(objToPost),
			headers: new Headers({
				'Content-type':'application/json'
			})
		})
		.then(resp => resp.json())
		.then(() => this.killScreenAndRenderSavedCard())
	}

	submitTicker = e => {
		e.preventDefault()
		this.setState({tickerToPass: this.state.ticker, loading: true})
		this.getStockPriceData(this.state.ticker)

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
		let upperCased = e.target.value.toUpperCase()
		this.setState({
			ticker: upperCased
		})
	}

	prepareHeadlineData = twitterResp => {
		let newTitles = twitterResp.tweets.statuses.map(story => {
				return story.text
			}).join(' ')
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
		return Promise.all([
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

	killScreenAndRenderSavedCard = () => {
		this.setState({
			showAll: false,
			stockCardShow: true
		})
		return <StockCard />
	}

	render() {
		return (
			<div className='input-response-container'>
				<div className='input-form-container'>
					<form 
						className='input-form' 
						type='submit' 
						onSubmit={this.submitTicker}>
						<input
							className='input-ticker'
							placeholder='AMZN'
							type='text'
							maxLength='5'
							value={this.state.ticker || ''}
							name='content'
							onChange={event => {
								this.formatInput(event)
							}}/>
						<input 
							className='submit-ticker'
							type='submit'
							value='G🤓!'/>
					</form>
				</div>
				{this.state.loading 
					? <Animation loading={true} height={300} width={300} loop={true} /> 
					: <TickerResponseContainer 
							sentimentScore={this.state.sentimentScore}
							prices={this.state.prices}
							postStockData={this.postStockData}
							setPrices={this.props.setPrices}
							tickerToPass={this.state.tickerToPass}
							basicStockData={this.state.basicStockData}
							sentimentScore={this.state.sentimentScore}
							showAll={this.state.showAll}
							stockCardShow={this.state.stockCardShow}
							/>}
			</div>
		)
	}
}

export default TickerInput
