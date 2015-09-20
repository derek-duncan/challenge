import React from 'react';
import { RouteHandler } from 'react-router';

// Actions
import AppActions from '../actions/AppActions';

// Components
import Challenge from '../components/challenge/Challenge.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      AppActions.setPageTitle('Home');
    }, 0);
  }
  render() {
    return (
      <div id='home'>
        <Challenge />
      </div>
    );
  }
}
