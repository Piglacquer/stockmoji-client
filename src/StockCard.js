import React, { Component } from 'react'
import './styles/css/StockCard.css'

class StockCard extends Component{
  constructor(props) {
		super(props)
		this.state = {

		}
	}

  componentDidMount(){
    this.getDbItems()
  }
  renderSentimentSwitch = (score) => {
    switch(score){
      case '-1.00':
        return ''
        break
      case '-0.90':
        return 'emoji'
        break;
      case '-0.80':
        return 'emoji'
        break;
      case '-0.70':
        return 'emoji'
        break
      case '-0.60':
        return 'emoji'
        break
      case '-0.50':
        return '🌵'
        break
      case '-0.40':
        return 'emoji'
        break
      case '-0.30':
        return '💩'
        break
      case '-0.20':
        return '😡'
        break
      case '-0.10':
        return '😰'
        break
      case '0.00':
        return '😶'
        break
      case '0.01':
        return '😯'
        break
      case '0.02':
        return '🙃'
        break
      case '0.03':
        return '😌'
        break
      case '0.04':
        return '🙂'
        break
      case '0.05':
        return '😗'
        break
      case '0.06':
        return '😋'
        break
      case '0.07':
        return '😀'
        break
      case '0.08':
        return '😬'
        break
      case '0.09':
        return '😁'
        break
      case '0.10':
        return '😇'
        break
      case '0.11':
        return '😚'
        break
      case '0.12':
        return '😉'
        break
      case '0.13':
        return '👍'
        break
      case '0.14':
        return '👏'
        break
      case '0.15':
        return '👌'
        break
      case '0.16':
        return '😯'
        break
      case '0.17':
        return '😯'
        break
      case '0.18':
        return '😯'
        break
      case '0.19':
        return '😆'
        break
      case '0.20':
        return '😽'
        break
      case '0.21':
        return '😯'
        break
      case '0.22':
        return '😯'
        break
      case '0.23':
        return '😯'
        break
      case '0.24':
        return '😯'
        break
      case '0.25':
        return '😯'
        break
      case '0.26':
        return '😯'
        break
      case '0.27':
        return '😯'
        break
      case '0.28':
        return '😯'
        break
      case '0.29':
        return '😯'
        break
      case '0.30':
        return '😌'
        break
      case '0.31':
        return '😯'
        break
      case '0.32':
        return '😯'
        break
      case '0.33':
        return '😯'
        break
      case '0.34':
        return '😯'
        break
      case '0.35':
        return '😯'
        break
      case '0.36':
        return '😯'
        break
      case '0.37':
        return '😯'
        break
      case '0.38':
        return '😯'
        break
      case '0.39':
        return 'emoji'
        break
      case '0.40':
        return '🍾'
        break
      case '0.50':
        return 'emoji'
        break
      case '0.60':
        return 'emoji'
        break
      case '0.70':
        return 'emoji'
        break
      case '0.80':
        return 'emoji'
        break
      case '0.90':
        return 'emoji'
        break
      case '1.00':
        return 'emoji'
        break
      default:
        console.log('nothing came through')
    }
  }

  magnitudeRound = (magnitude) => {
    if(magnitude>0 && magnitude<3){
      return 0
    }
    if(magnitude>=3 && magnitude<8){
      return 5
    }
    if(magnitude>=8 && magnitude<13){
      return 10
    }
    if(magnitude>=13 && magnitude<18){
      return 15
    }
    if(magnitude>=18 && magnitude<23){
      return 20
    }
    if(magnitude>=23 && magnitude<28){
      return 25
    }
    if(magnitude>=28 && magnitude<33){
      return 30
    }
    if(magnitude>=33 && magnitude<38){
      return 35
    }
    if(magnitude>=38 && magnitude<43){
      return 40
    }
    if(magnitude>=43 && magnitude<48){
      return 45
    }
    if(magnitude>=48 && magnitude<53){
      return 50
    }
    if(magnitude>=53 && magnitude<58){
      return 55
    }
  }

  renderMagnitudeSwitch = (score) => {
    var roundedMagnitude = this.magnitudeRound(score)
    switch(roundedMagnitude){
      case 0:
        return '🐶'
        break
      case 5:
        return '🐱'
        break
      case 10:
        return '🐰'
        break
      case 15:
        return '🐻'
        break
      case 20:
        return '🙉'
        break
      case 25:
        return '🙊'
        break
      case 30:
        return '🙈'
        break
      case 35:
        return '😵'
        break
      case 40:
        return '👽'
        break
      case 45:
        return '🕷'
        break
      case 50:
        return '🦂'
        break
      case 55:
        return '😱'
        break
      default:
        console.log('nothing came through')
    }
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
                <p className='sentiment-emoji'> {this.renderSentimentSwitch(item.score)}</p>
                <p className='sentiment'>{item.score}</p>
              </div>
              <div className='score'>
                <p className='sentiment-emoji'> {this.renderMagnitudeSwitch(item.magnitude)}</p>
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
      this.state.dbItems ? this.createCards(this.state.dbItems) : null
    )
  }
}

export default StockCard
