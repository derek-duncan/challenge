'use strict';

// Modules
import React from 'react';

// Actions

// Stores

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header id='header'>
        <span className='header-title'>Challenge.io</span>
        <button className='header-cta button'>Start A Challenge</button>
      </header>
    )
  }
}

