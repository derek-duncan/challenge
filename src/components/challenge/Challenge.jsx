'use strict';

// Modules
import React from 'react';

// Components
import Name from './Name.jsx';
import Card from './Card.jsx';

export default class Challenge extends React.Component {
  constructor(props) {
    super(props);
    this.selectUrl = this.selectUrl.bind(this);
  }
  selectUrl(e) {
    e.preventDefault();
    React.findDOMNode(this.refs.url).setSelectionRange(0, 1000);
  }
  render() {
    return (
      <div id='challenge'>
        <div className='challenge-details'>
          <p className='challenge-tagline'>Goal</p>
          <Name name='Test Challenge' />
          <input className='challenge-url' type='text' ref='url' value={this.props.url} onClick={this.selectUrl} />
        </div>
        <div className='challenge-cards'>
          <Card step={this.props.step} />
        </div>
      </div>
    )
  }
}

Challenge.defaultProps = {
  url: 'http://challen.ge/192381',
  step: {
    name: 'How long will it take?'
  }
};
