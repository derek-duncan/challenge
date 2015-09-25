import React from 'react';
import { RouteHandler } from 'react-router';

// Actions
import AppActions from '../actions/AppActions';

// Components
import Challenge from '../components/challenge/Challenge.jsx';
import Loader from '../components/Loader.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.loading = true;
  }
  componentDidMount() {
    setTimeout(() => {
      AppActions.setPageTitle('Home');
      this.setState({
        loading: false
      });
    }, 0);
  }
  render() {
    return (
      <div id='home'>
        <Loader isLoading={this.state.loading}>
          <Challenge />
        </Loader>
      </div>
    );
  }
}
