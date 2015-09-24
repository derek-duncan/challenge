'use strict';

// Modules
import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let className = 'card';
    if (this.props.active == this.props.index) className += ' active';
    return (
      <div data-index={this.props.index} className={className}>
        {this.props.children}
      </div>
    )
  }
}
