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
    let margin = 5;
    let styles = {
      width: `${this.props.cardWidth - (margin * 2)}%`,
      marginLeft: `${5}%`,
      marginRight: `${5}%`
    };
    return (
      <div data-index={this.props.index} key={this.props.index} className={className} style={styles}>
        {this.props.children}
      </div>
    )
  }
}
