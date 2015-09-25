'use strict';

// Modules
import React from 'react';
import cx from 'classnames';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let isActive = this.props.active == this.props.cardNumber;
    let classes = cx({
      'card': true,
      'active': isActive,
      'inactive': !isActive
    });
    let styles = {
      width: `${this.props.cardWidth}%`,
    };
    return (
      <div data-index={this.props.cardNumber} key={this.props.cardNumber} className={classes} style={styles}>
        <div className='card-inner'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
