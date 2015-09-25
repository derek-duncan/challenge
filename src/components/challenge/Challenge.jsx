'use strict';

// Modules
import React from 'react';

// Stores
import ChallengeStore from '../../stores/ChallengeStore';

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
    this.state = Object.assign({}, ChallengeStore.getState(), {
      url: 'http://challen.ge/192381',
      step: {
        name: 'How long will it take?',
        content: '30 min',
        action: 'Open'
      }
    });

    this.selectUrl = this.selectUrl.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    ChallengeStore.listen(this.onChange);
  }
  componentWillUnmount() {
    ChallengeStore.unlisten(this.onChange);
  }
  selectUrl(e) {
    e.preventDefault();
    React.findDOMNode(this.refs.url).setSelectionRange(0, 1000);
  }
  onChange(state) {
    this.setState(state);
  }
  render() {
    return (
      <div id='challenge'>
        <div className='challenge-details'>
          <p className='challenge-tagline'>Goal</p>
          <ChallengeName name={this.state.challengeName} />
          <input className='challenge-url' type='text' ref='url' value={this.state.url} onClick={this.selectUrl} />
        </div>
        <Carder>
          <Card>
            <CardName name={this.state.step.name} />
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
              <div className='card-board'>
                <p>Random text here</p>
              </div>
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
