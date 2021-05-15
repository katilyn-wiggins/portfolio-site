import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import Home from './Home/home.js';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../src/plinko/sketch';
// import Plinko from './plinko/plinko.js';
// import AboutMe from './AboutMe/about.js';
// import Map from './Map/map.js';
// import Projects from './Projects/projects.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Router> */}
        {/* <Switch> */}
        {/* <Route exact path="/" component={Home} /> */}
        <P5Wrapper
          // exact
          // path="/sketch"
          sketch={sketch}
          // color={this.state.color}
        ></P5Wrapper>
        {/* </Switch> */}

        {/* </Header> */}
        {/* </Router> */}
      </div>
    );
  }
}
