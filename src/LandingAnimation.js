import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './animation.json'


export default class LottieControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
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
              height={600}
              width={1200}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}
              />
    </div>
  }
}
