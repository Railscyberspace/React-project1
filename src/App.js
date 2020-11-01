import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Thanks from './components/Thanks'

class App extends Component
{
  render()
  {
    return (
      <div className="App">

        <Greet></Greet>
        <Welcome></Welcome>
        <Hello></Hello>
        <Thanks></Thanks>
      </div>
    );

  }

}
export default App;
