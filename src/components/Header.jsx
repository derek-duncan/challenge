'use strict';

// Modules
import React from 'react';
import cx from 'classnames';

// Actions

// Stores

// Components
import HeaderTitle from './HeaderTitle.jsx';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let pageClasses = cx({
      'header-page': true,
      'hide': !this.props.pageTitle
    });
    return (
      <header id='header'>
        <div className='header-default'>
          <span className='header-title'>Challenge.io</span>
          <button className='header-cta button'>Start A Challenge</button>
        </div>
        <div className={pageClasses}>
          <HeaderTitle pageTitle={this.props.pageTitle} />
        </div>
      </header>
    )
  }
}

