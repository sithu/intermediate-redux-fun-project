import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { login, hear, join, connect, say } from './chat'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', message: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleClick() {
    this.conn = connect()

    login(this.conn, this.state.name, this.state.name)
      .then(user => {
        console.log('user', user)
        join(this.conn)
          .then(channel =>
            this.channel = channel
          )
      }).then(() => {
        hear(this.conn, (message, channel) => {
          console.log(message, channel)
        })
      })
  }

  handleSend() {
    say(this.channel, this.state.message)
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  handleMessageChange(event) {
    this.setState({ message: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <input value={this.state.name} onChange={this.handleChange} type="text"></input>
          <button onClick={this.handleClick}>login</button>
          <input value={this.state.message} onChange={this.handleMessageChange} type="text"></input>
          <button onClick={this.handleSend}>send</button>
        </p>
      </div>
    );
  }
}

export default App;
