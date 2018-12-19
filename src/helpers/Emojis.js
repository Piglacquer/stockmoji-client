const renderMagnitudeSwitch = (score) => {
  var roundedMagnitude = magnitudeRound(score)
  switch (roundedMagnitude) {
    case 0:
      return '🐶'
    case 5:
      return '🐱'
    case 10:
      return '🐰'
    case 15:
      return '🐻'
    case 20:
      return '🙉'
    case 25:
      return '🙊'
    case 30:
      return '🙈'
    case 35:
      return '😵'
    case 40:
      return '👽'
    case 45:
      return '🕷'
    case 50:
      return '🦂'
    case 55:
      return '😱'
    case 60:
      return '☢️'
    default:
      console.log('nothing came through')
  }
}

const magnitudeRound = (magnitude) => {
  if (magnitude > 0 && magnitude < 3) {
    return 0
  }
  if (magnitude >= 3 && magnitude < 8) {
    return 5
  }
  if (magnitude >= 8 && magnitude < 13) {
    return 10
  }
  if (magnitude >= 13 && magnitude < 18) {
    return 15
  }
  if (magnitude >= 18 && magnitude < 23) {
    return 20
  }
  if (magnitude >= 23 && magnitude < 28) {
    return 25
  }
  if (magnitude >= 28 && magnitude < 33) {
    return 30
  }
  if (magnitude >= 33 && magnitude < 38) {
    return 35
  }
  if (magnitude >= 38 && magnitude < 43) {
    return 40
  }
  if (magnitude >= 43 && magnitude < 48) {
    return 45
  }
  if (magnitude >= 48 && magnitude < 53) {
    return 50
  }
  if (magnitude >= 53 && magnitude < 58) {
    return 55
  }
  if (magnitude >= 58 && magnitude < 62) {
    return 60
  }
}

const renderSentimentSwitch = (score) => {
  score = score.toString()
  switch (score) {
    case '-1.00':
      return ''
    case '-0.90':
      return 'emoji'
    case '-0.80':
      return 'emoji'
    case '-0.70':
      return 'emoji'
    case '-0.60':
      return 'emoji'
    case '-0.50':
      return '🌵'
    case '-0.40':
      return 'emoji'
    case '-0.30':
      return '💩'
    case '-0.20':
      return '😡'
    case '-0.10':
      return '😰'
    case '0':
      return '😶'
    case '0.01':
      return '😯'
    case '0.02':
      return '🙃'
    case '0.03':
      return '😌'
    case '0.04':
      return '🙂'
    case '0.05':
      return '😗'
    case '0.06':
      return '😋'
    case '0.07':
      return '😀'
    case '0.08':
      return '😬'
    case '0.09':
      return '😁'
    case '0.10':
      return '😇'
    case '0.11':
      return '😚'
    case '0.12':
      return '😉'
    case '0.13':
      return '👍'
    case '0.14':
      return '👏'
    case '0.15':
      return '👌'
    case '0.16':
      return '😯'
    case '0.17':
      return '😯'
    case '0.18':
      return '😯'
    case '0.19':
      return '😆'
    case '0.20':
      return '😽'
    case '0.21':
      return '😯'
    case '0.22':
      return '😯'
    case '0.23':
      return '😯'
    case '0.24':
      return '😯'
    case '0.25':
      return '😯'
    case '0.26':
      return '😯'
    case '0.27':
      return '😯'
    case '0.28':
      return '😯'
    case '0.29':
      return '😯'
    case '0.30':
      return '😌'
    case '0.31':
      return '😯'
    case '0.32':
      return '😯'
    case '0.33':
      return '😯'
    case '0.34':
      return '😯'
    case '0.35':
      return '😯'
    case '0.36':
      return '😯'
    case '0.37':
      return '😯'
    case '0.38':
      return '😯'
    case '0.39':
      return 'emoji'
    case '0.40':
      return '🍾'
    case '0.50':
      return 'emoji'
    case '0.60':
      return 'emoji'
    case '0.70':
      return 'emoji'
    case '0.80':
      return 'emoji'
    case '0.90':
      return 'emoji'
    case '1.00':
      return 'emoji'
    default:
      console.log('nothing came through')
  }
}

module.exports = {
  renderMagnitudeSwitch,
  renderSentimentSwitch
}
