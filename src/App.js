import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react'
//news api key 06454ab3934b4aea83409ae14d4825ba


export default class App extends Component {
  render(){
   return(
    <>
    <Navbar></Navbar>
    <News></News>
    </>
   )
  }
}
