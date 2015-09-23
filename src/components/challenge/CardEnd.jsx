'use strict';

// Modules
import React from 'react';

export default class CardEnd extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='card-end'>
        {this.props.children}
      </div>
    )
  }
}

