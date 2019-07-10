// your Bomb code here!

import React frin 'react';

export default class Bomb extends React.component {
  constructor(props) {
  super()
  this.state = {
    secondsLeft: prop.initialCount
  }
}


  render() {
    const response = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I g boom!`;
      return (
        <div>{response}</div>
      );
    }
}
