'use strict';

// Modules
import React from 'react';

// Actions

// Stores

export default class Name extends React.Component {
  constructor(props) {
    super(props);
    this.toggleInput = this.toggleInput.bind(this);
  }
  toggleInput() {
    let text = React.findDOMNode(this.refs.text);
    let input = React.findDOMNode(this.refs.input);
    text.classList.toggle('hide');
    input.classList.toggle('show');
    input.focus();
  }
  render() {
    return (
      <div className='challenge-name'>
        <h4 className='name-text' ref='text' onClick={this.toggleInput}>{this.props.name}</h4>
        <input className='name-input input hide' ref='input' onBlur={this.toggleInput} defaultValue={this.props.name} />
      </div>
    )
  }
}

Name.defaultProps = {
  name: ''
};
