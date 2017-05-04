import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';

class App extends Component {
  render() {
    return (
      <div>
          <ul>
             <li>Home</li>
             <li>About</li>
             <li>Contact</li>
          </ul>
      
         {this.props.children}
       </div>
    );
  }
}

export default App;
