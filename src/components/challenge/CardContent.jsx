'use strict';

// Modules
import React from 'react';

export default class CardContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='card-content'>
        {this.props.children}
      </div>
    )
  }
}

