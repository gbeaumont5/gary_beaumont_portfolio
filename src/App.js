import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from './components/about'
import Portfolio from './components/portfolio'
import Contact from './components/contact'

class Home extends Component {
  constructor(props) {
      super(props)
      this.setState({
        projects: []
      })
  }

  render () {
    return(
      <Router>
        <header>
        <nav>
          <Link className='nav' to='/'>Home</Link>
          <Link className='nav' to='/portfolio'>Portfolio</Link>
          <Link  className='nav' to='/contact'>Contact</Link>
          <a  className='nav' href='https://drive.google.com/file/d/1-8m81it2SxmwD3jTqQi2WwC8bE66lAH6/view?usp=sharing'target="_blank">Resume</a>
        </nav>
        </header>
        <body>


        <Route path="/" exact render={props => (
                          <About {...props} />
                      )}
                          />
        <Route path="/portfolio" exact render={props => (
                          <Portfolio {...props} />
                      )}
                          />

        <Route path="/contact" exact render={props => (
                          <Contact {...props} />
                      )}
                          />
                        
                        
                        </body> 
      </Router>
    )
  }

}


export default Home;
