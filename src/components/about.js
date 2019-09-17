import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css'



class About extends Component {
  constructor(props) {
      super(props)
      this.setState({
        projects: []
      })
  }

  render () {
    return(
    <div className='App'>
        <h1>Gary A. Beaumont</h1>
        <h2>Software Engineer</h2>
        <img className='profile' src={require('../images/profile_pic.jpeg')}></img>
        <h2>About</h2>
        <p className='about'></p>
    </div>
    )
  }

}


export default About;