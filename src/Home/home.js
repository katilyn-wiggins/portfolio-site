import React, { Component } from 'react';
import Header from '../Components/header.js';
import Plinko from '../plinko/plinko.js';

export default class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Header />
        <h1 className="title">Katilyn Wiggins</h1>
        <Plinko />
      </div>
    );
  }
}
