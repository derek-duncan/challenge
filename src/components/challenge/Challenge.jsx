'use strict';

// Modules
import React from 'react';

// Stores
import ChallengeStore from '../../stores/ChallengeStore';

// Components
import ChallengeName from './ChallengeName.jsx';
import Carder from './Carder.jsx';
import Card from './cards/Card.jsx';
import CardContentHidden from './cards/CardContentHidden.jsx';

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

    this.handleURLFocus = this.handleURLFocus.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    ChallengeStore.listen(this.onChange);
  }
  componentWillUnmount() {
    ChallengeStore.unlisten(this.onChange);
  }
  handleURLFocus(e) {
    e.preventDefault();
    React.findDOMNode(this.refs.url).setSelectionRange(0, 1000);
  }
  onChange(state) {
    this.setState(state);
  }
  render() {
    let demoList = [
      'Text 1',
      'Text 2',
      'Text 3'
    ];
    return (
      <div id='challenge'>
        <div className='challenge-details'>
          <ChallengeName name={this.state.challengeName} />
          <input className='challenge-url' type='text' ref='url' value={this.state.url} onClick={this.handleURLFocus} />
        </div>
        <Carder>
          <Card>
            <CardContentHidden name={this.state.step.name} actionText={this.state.step.action} initialContent='Random text here' hiddenContent={demoList} />
          </Card>
          <Card>
            <h4 className='card-name'>Invite friends</h4>
            <div className='card-content'>
              <ul className='card-board'>
                <li className='board-item'>
                  <span className='item-section item-section--dark'>1</span>
                  <span className='item-section'>Random text here</span>
                </li>
                <li className='board-item'>
                  <span className='item-section item-section--dark'>2</span>
                  <span className='item-section'>More text here</span>
                </li>
              </ul>
            </div>
            <div className='card-end'>
              <button>Action</button>
            </div>
          </Card>
          <Card>
            <h4 className='card-name'>Another crazy card :)</h4>
            <div className='card-content'>
              <p>Random text here</p>
            </div>
            <div className='card-end'>
              <button>Action</button>
            </div>
          </Card>
        </Carder>
      </div>
    )
  }
}
