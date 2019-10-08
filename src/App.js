import React, { Component } from 'react';
import './App.css';
import EightBall from './EightBall'

class App extends Component {
  static defaultProps = {
    answers: [
      { msg: "It is certain.", color: "green" },
      { msg: "It is decidedly so.", color: "green" },
      { msg: "Without a doubt.", color: "green" },
      { msg: "Yes - definitely.", color: "green" },
      { msg: "You may rely on it.", color: "green" },
      { msg: "As I see it, yes.", color: "green" },
      { msg: "Most likely.", color: "green" },
      { msg: "Outlook good.", color: "green" },
      { msg: "Yes.", color: "green" },
      { msg: "Signs point to yes.", color: "goldenrod" },
      { msg: "Reply hazy, try again.", color: "goldenrod" },
      { msg: "Ask again later.", color: "goldenrod" },
      { msg: "Better not tell you now.", color: "goldenrod" },
      { msg: "Cannot predict now.", color: "goldenrod" },
      { msg: "Concentrate and ask again.", color: "goldenrod" },
      { msg: "Don't count on it.", color: "red" },
      { msg: "My reply is no.", color: "red" },
      { msg: "My sources say no.", color: "red" },
      { msg: "Outlook not so good.", color: "red" },
      { msg: "Very doubtful.", color: "red" },
    ] 
  }

  constructor(props){
    super(props);
    this.state = {currColor: "black", message:"Think of a Question"}
  }

  handleClick = () => {
    let randomItem = this.props.answers[Math.floor(Math.random()*this.props.answers.length)];
    this.setState({currColor: randomItem.color, message: randomItem.msg})
  }

  render(){
    return(
      <div onClick={this.handleClick}>
        <EightBall currColor={this.state.currColor} message={this.state.message}/>
      </div>
    )
  }

}

export default App;
