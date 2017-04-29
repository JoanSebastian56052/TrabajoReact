import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'
//import { getEvents } from './gcal'

import BigCalendar from 'react-big-calendar'
//import {connect} from "react-redux";
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment); 


class MyCalendar extends React.Component {
  constructor () {
    super()
    this.state = {
      events: []
    }
  }
  
  render () {
    return (
      // React Components in JSX look like HTML tags
      <BigCalendar
        style={{height: '420px'}}
        events={this.state.events}
      />
    )
  }
}


export default MyCalendar; 

//citas-165923 
//  AIzaSyAjzepKijqW8lS2Kew2gdifuqjFV3S7i68 s