import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import InputZIP from "./components/input-zip.component";

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank" rel="noopener noreferrer">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/location" className="navbar-brand">Plants</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/location" className="nav-link">Input ZIP</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          
          <Route path='/location' component={InputZIP} />
        </div>
      </Router>
    );
  }
}

export default App;