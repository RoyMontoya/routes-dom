import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import Home from './views/Home'
import ContactUs from './views/ContactUs'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/:name" component ={Home}/>
          <Route path="/contact-us/:phone" component ={ContactUs}/>
        </div>
      </Router>
    );
  }
}

export default App;
