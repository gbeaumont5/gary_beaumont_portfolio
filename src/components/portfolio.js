import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css'



class Portfolio extends Component {
  constructor(props) {
      super(props)
      this.setState({
        projects: []
      })
  }

  render () {
    return(
    <div className='App'>
        <h1>My Portfolio</h1>
        <div className='project'>
            <h3>Food and Recipe Search App</h3>
            <img className='projectImage' src={require('../images/food_app.png')}></img>
            <div class='technologies'>
            <p><b>Technologies Used:</b></p><p> HTML, CSS, Javascript, jQuery, AJAX</p>
            </div>
            <div className='links'>
            <a className='link' href='https://gbeaumont5.github.io/'>Check it out!</a>
            <a className='link' href='https://github.com/gbeaumont5/gbeaumont5.github.io'>View the code!</a>
            </div>
        </div>
        <div className='project'>
            <h3>Fly Fishing Destinations App</h3>
            <img className='projectImage' src={require('../images/Homescreen.png')}></img>
            <div class='technologies'>
            <p><b>Technologies Used:</b></p><p> HTML, CSS, Javascript, Bootstrap, Express, EJS, MongoDB, Mongoose</p>
            </div>
            <div className='links'>
            <a className='link' href='https://intense-beach-33221.herokuapp.com/rivers/'>Check it out!</a>
            <a className='link' href='https://github.com/gbeaumont5/FlyFishing-WebApp'>View the code!</a>
            </div>
        </div>
        <div className='project'>
            <h3>Good Tomatoes Movie Search and Reviews App</h3>
            <img className='projectImage' src={require('../images/GoodTomato_Search.png')}></img>
            <div class='technologies'>
            <p><b>Technologies Used:</b></p><p> HTML, CSS, Materialize, Javascript, Express, React, MongoDB, Mongoose, Node.js</p>
            </div>
            <div className='links'>
            <a className='link' href='http://good_tomatoes.surge.sh/'>Check it out!</a>
            <a className='link' href='https://github.com/gbeaumont5/front_end_good_tomatoes'>View the code!</a>
            </div>
        </div>
    </div>
    )
  }

}


export default Portfolio;