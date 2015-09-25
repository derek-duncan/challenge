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
    let styles = {
      width: `${this.props.cardWidth}%`,
    };
    return (
      <div data-index={this.props.index} key={this.props.index} className={className} style={styles}>
        <div className='card-inner'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
