import React, {Component} from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../assets/animation.json'


export default class LottieControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isStopped: false, 
      isPaused: false
    }
  }

  render() {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return <div>
      <Lottie options={defaultOptions}
              height={this.props.height}
              width={this.props.width}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}
              />
    </div>
  }
}
