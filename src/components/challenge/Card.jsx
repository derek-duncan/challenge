'use strict';

// Modules
import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='card'>
        <h4 className='card-name'>{this.props.step.name}</h4>
      </div>
    )
  }
}
