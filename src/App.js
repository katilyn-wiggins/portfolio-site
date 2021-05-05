import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home/home.js';
import Plinko from './plinko/plinko.js';
// import AboutMe from './AboutMe/about.js';
// import Map from './Map/map.js';
// import Projects from './Projects/projects.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/plinko"
              exact
              render={(routerProps) => <Plinko {...routerProps} />}
            />
          </Switch>
          {/* </Header> */}
        </Router>
      </div>
    );
  }
}
