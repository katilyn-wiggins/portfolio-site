import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class header extends Component {
  render() {
    return (
      <div>
        <NavLink to="/">home</NavLink>
        <NavLink to="/projects">projects</NavLink>
        <NavLink to="/aboutme">about me</NavLink>
        <NavLink to="/map">map</NavLink>
      </div>
    );
  }
}
