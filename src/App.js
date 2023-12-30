import './App.css';

import ChessBoard from './components/ChessBoard';
import React, { Component } from 'react'
//news api key 06454ab3934b4aea83409ae14d4825ba


export default class App extends Component {
  render(){
   return(
    <>
    <div className='ChessBox'>  
    <ChessBoard></ChessBoard>
    </div>
    </>
   )
  }
}
