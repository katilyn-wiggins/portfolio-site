import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import Home from './Home/home.js';
import P5Wrapper from 'react-p5-wrapper';
import PlinkoSketch from '../src/Components/PlinkoSketch';
// import Plinko from './plinko/plinko.js';
// import AboutMe from './AboutMe/about.js';
// import Map from './Map/map.js';
// import Projects from './Projects/projects.js';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Router> */}
        {/* <Switch> */}
        {/* <Route exact path="/" component={Home} /> */}
        <PlinkoSketch />
        {/* </Switch> */}

        {/* </Header> */}
        {/* </Router> */}
      </div>
    );
  }
}
