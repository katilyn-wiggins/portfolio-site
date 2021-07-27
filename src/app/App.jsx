import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import gsap from 'gsap'; 
import Home from '../containers/PortfolioContainer';
// import PlinkoSketch from '../components/PlinkoSketch';
// import Plinko from '../../plinko/plinko';
// import AboutMe from './AboutMe/about.js';
// import Map from './Map/map.js';
// import Projects from './Projects/projects.js';

export default class App extends Component {
  render() {
    gsap.from('header', { duration: 1, y: 0, ease: 'elastic', delay: 2.5 });


    return (
      <div>
        <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        {/* <PlinkoSketch /> */}
        </Switch>
        </Router>
      </div>
    );
  }
}

