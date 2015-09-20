'use strict';

// Modules
import React from 'react';

// Actions

// Stores

export default class Name extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h4 className='challenge-name'>{this.props.name}</h4>
    )
  }
}

Name.defaultProps = {
  name: ''
};
