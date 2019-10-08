import React, { Component } from 'react';
import './App.css'

class EightBall extends Component {
  render() {
    let color = this.props.currColor
    return(
      <div id="rectangle" style={ {backgroundColor: color} }>
        <div id="message">{this.props.message}</div>
      </div>
    )
  }
}

export default EightBall;