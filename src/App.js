import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import geolocated from "./components/input-zip.component";

import logo from "./plant.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/#" rel="noopener noreferrer">
              <img src={logo} width="30" height="30" alt="/#" />
            </a>
            <Link to="/" className="navbar-brand">SeedSearcher</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Input ZIP</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          
          <Route path='/' component={geolocated} />
        </div>
      </Router>
    );
  }
}

export default App;