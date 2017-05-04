import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory } from 'react-router';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import { render } from 'react-dom';

ReactDOM.render((
  <App/>
), document.getElementById('root'));




