'use strict';

// Modules
import React from 'react';

// Actions

// Stores

// Components
import HeaderTitle from './HeaderTitle.jsx';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header id='header'>
        <div className='header-default'>
          <span className='header-title'>Challenge.io</span>
          <button className='header-cta button'>Start A Challenge</button>
        </div>
        <div className='header-page'>
          <HeaderTitle pageTitle={this.props.pageTitle} />
        </div>
      </header>
    )
  }
}

