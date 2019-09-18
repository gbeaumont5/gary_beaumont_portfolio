import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css'


class Contact extends Component {
  constructor(props) {
      super(props)
      this.setState({
        projects: []
      })
  }

  render () {
    return(
    <div className='App'>
        <h1>Contact Me!</h1>
        <div>
        <a className='icon' href='tel:860-302-8307'>
        <img className='iconImage' src={require('../images/phone.png')}/>
        <p className='contactInfo'>860.302.8307</p></a>
        </div>
        <div>
        <a className='icon' href='mailto:garyallenbeaumont@gmail.com'>
        <img className='iconImage' src={require('../images/email_icon.png')}/>
        <p className='contactInfo'>garyallenbeaumont@gmail.com</p></a>
        </div>
        <div>
        <a className='icon' href='https://www.linkedin.com/in/gary-beaumont-a47a98b3/'>
        <img className='iconImage' src={require('../images/linkedin2.png')}/>
        <p className='contactInfo'>gbeaumont5</p></a>
        </div>
        <div>
        <a className='icon' href='https://github.com/gbeaumont5'>
        <img className='iconImage' src={require('../images/github1.png')}/>
        <p className='contactInfo'>gbeaumont5</p></a>
        </div>
    </div>
    )
  }

}


export default Contact;