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
        <p className='about'>My interest in coding sparked through my time working in marketing. On occasion I would need to look at the source code of a website to solve problems. I really enjoyed the challenge and technical aspect which lead me to decide to change careers. To accelerate my learning I attended and graduated from General Assembly's Software Engineering Impressive boot-camp in Stamford, Connecticut. At General Assembly I learned full stack engineering as well as the skills to continue to further my learning.</p>
    </div>
    )
  }

}


export default About;