'use strict';

// Modules
import React from 'react';
import cx from 'classnames';

// Actions
import ChallengeActions from '../../actions/ChallengeActions';

// Stores

export default class ChallengeName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.isEditing = false;
    this.showInput = this.showInput.bind(this);
    this.hideInput = this.hideInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  showInput() {
    this.setState({
      isEditing: true
    }, () => {
      let text = React.findDOMNode(this.refs.text);
      let input = React.findDOMNode(this.refs.input);
      input.focus();
      input.selectionStart = input.selectionEnd = input.value.length;
    });
  }
  hideInput() {
    this.setState({
      isEditing: false
    });
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
    let challengeClasses = cx({
      'challenge-name': true,
      'editing': this.state.isEditing
    });
    let textClasses = cx({
      'name-text': true,
      'hide': this.state.isEditing,
      'show': !this.state.isEditing
    });
    let inputClasses = cx({
      'name-input': true,
      'input': true,
      'hide': !this.state.isEditing,
      'show': this.state.isEditing
    });
    return (
      <div className={challengeClasses}>
        <h4 className={textClasses} ref='text' key='text' onClick={this.showInput}>{this.props.name}</h4>
        <input className={inputClasses} ref='input' key='input' onBlur={this.hideInput} onChange={this.handleChange} onKeyDown={this.handleKeyDown} defaultValue={this.props.name} />
      </div>
    )
  }
}

ChallengeName.defaultProps = {
  name: ''
};
