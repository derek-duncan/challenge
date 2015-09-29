'use strict';

// Modules
import React from 'react';
import cx from 'classnames';

// Components
import Card from './Card.jsx';

export default class CardContentHidden extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.visible = false;
    this.handleActionClick = this.handleActionClick.bind(this);
  }
  handleActionClick(e) {
    e.preventDefault();
    this.setState({
      visible: !this.state.visible
    });
  }
  render() {
    let initialClasses = cx({
      'card-content': true,
      'hide': this.state.visible
    });
    let hiddenClasses = cx({
      'card-content': true,
      'hide': !this.state.visible
    });
    let buttonText = !this.state.visible ? this.props.actionText : 'Close';
    return (
      <div className='card-inner'>
        <h4 className='card-name'>{this.props.name}</h4>
        <div className={initialClasses}>
          {this.props.initialContent}
        </div>
        <div className={hiddenClasses}>
          {this.props.hiddenContent}
        </div>
        <div className='card-end'>
          <button onClick={this.handleActionClick}>{buttonText}</button>
        </div>
      </div>
    )
  }
}

