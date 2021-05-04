import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/header.js';
import Home from './Home/home.js';
import AboutMe from './AboutMe/about.js';
import Map from './Map/map.js';
import Projects from './Projects/projects.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header>
            <Switch>
              <Route
                path="/"
                exact
                render={(routerProps) => <Home {...routerProps} />}
              ></Route>
              <Route
                path="/projects"
                exact
                render={(routerProps) => <Projects {...routerProps} />}
              ></Route>
              <Route
                path="/aboutme"
                exact
                render={(routerProps) => <AboutMe {...routerProps} />}
              ></Route>
              <Route
                path="/map"
                exact
                render={(routerProps) => <Map {...routerProps} />}
              ></Route>
            </Switch>
          </Header>
        </Router>
      </div>
    );
  }
}
