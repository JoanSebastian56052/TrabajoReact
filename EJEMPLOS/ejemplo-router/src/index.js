import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './App';
import Repos from './Repos';
import About from './About';
import './index.css';

render((
  <Router history={hashHistory}>
  	<Route path="/" comonent={App}/>
  	<Route path="/Repos" comonent={Repos}/>
  	<Route path="/About" comonent={About}/>
  </Router>),
  document.getElementById('app')
);
