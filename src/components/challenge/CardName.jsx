'use strict';

// Modules
import React from 'react';

export default class CardName extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h4 className='card-name'>{this.props.name}</h4>
    )
  }
}

