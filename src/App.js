import './App.css';

import React, { Component } from 'react'
//news api key 06454ab3934b4aea83409ae14d4825ba
export default class App extends Component {
  c = "John"
  render() {
    return (
      <div>
        Hello my first class based component {this.c}
      </div>
    )
  }
}
