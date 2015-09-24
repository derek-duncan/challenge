'use strict';

// Modules
import React from 'react';

// Components
import ChallengeName from './ChallengeName.jsx';
import Card from './Card.jsx';
import CardName from './CardName.jsx';
import CardContent from './CardContent.jsx';
import CardEnd from './CardEnd.jsx';
import Carder from './Carder.jsx';

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
          <ChallengeName name='Test Challenge' />
          <input className='challenge-url' type='text' ref='url' value={this.props.url} onClick={this.selectUrl} />
        </div>
        <Carder>
          <Card>
            <CardName name={this.props.step.name} />
            <CardContent>
              <p>Random text here</p>
            </CardContent>
            <CardEnd>
              <button>Open</button>
            </CardEnd>
          </Card>
          <Card>
            <CardName name='Invite friends' />
            <CardContent>
              <p>Random text here</p>
            </CardContent>
            <CardEnd>
              <button>Open</button>
            </CardEnd>
          </Card>
          <Card>
            <CardName name='Another crazy card :)' />
            <CardContent>
              <p>Random text here</p>
            </CardContent>
            <CardEnd>
              <button>Open</button>
            </CardEnd>
          </Card>
        </Carder>
      </div>
    )
  }
}

Challenge.defaultProps = {
  url: 'http://challen.ge/192381',
  step: {
    name: 'How long will it take?',
    content: '30 min',
    action: 'Open'
  }
};
