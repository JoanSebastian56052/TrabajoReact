import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>SMELL FRESH</h2>
        </div>
        <p className="App-intro">
          <h2>Realizado por:</h2>
          <h4>Stefanny Toro</h4>
          <h4>Diego Andres Mazo</h4>
          <h4>Daniel Marinez G</h4>
          <h4>Joan Sebastian Morales</h4>
        </p>
      </div>
    );
  }
}

export default App;
