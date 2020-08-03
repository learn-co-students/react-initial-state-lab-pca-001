import React from "react"

// your Bomb code here!
export default class Bomb extends React.Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render () {
    if(this.state.secondsLeft === 0) {
      return <p>Boom!</p>
    } else {
      return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    }
  }
}