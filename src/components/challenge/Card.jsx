'use strict';

// Modules
import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let className = 'card';
    if (this.props.active) className += ' active';
    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}
