'use strict';

// Modules
import React from 'react';

// Actions
import ChallengeActions from '../../actions/ChallengeActions';

// Stores

export default class ChallengeName extends React.Component {
  constructor(props) {
    super(props);
    this.toggleInput = this.toggleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  toggleInput() {
    let text = React.findDOMNode(this.refs.text);
    let input = React.findDOMNode(this.refs.input);
    text.classList.toggle('hide');
    input.classList.toggle('show');
    input.focus();
    input.selectionStart = input.selectionEnd = input.value.length;
  }
  handleChange(e) {
    let value = e.target.value;
    ChallengeActions.setName(value);
  }
  handleKeyDown(e) {
    if (e.keyCode == 13) {
      e.target.blur();
    }
  }
  render() {
    return (
      <div className='challenge-name'>
        <h4 className='name-text' ref='text' onClick={this.toggleInput}>{this.props.name}</h4>
        <input className='name-input input hide' ref='input' onBlur={this.toggleInput} onChange={this.handleChange} onKeyDown={this.handleKeyDown} defaultValue={this.props.name} />
      </div>
    )
  }
}

ChallengeName.defaultProps = {
  name: ''
};
