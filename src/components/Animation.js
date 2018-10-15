import React, {Component} from 'react'
import Lottie from 'react-lottie';
import * as landingAnimation from '../assets/animation.json'
import * as loadingAnimation from '../assets/loader.json'


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
      loop: this.props.loop,
      autoplay: true,
      animationData: this.props.loading ? loadingAnimation : landingAnimation,
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
