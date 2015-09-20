'use strict';

// Modules
import React from 'react';
import { RouteHandler } from 'react-router';

// Actions
import AppActions from '../actions/AppActions';

// Stores
import AppStore from '../stores/AppStore';

// Components
import Header from '../components/Header.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = AppStore.getState();
  }
  componentDidMount() {
    AppStore.listen(this.handleChange.bind(this));
  }
  componentWillUnmount() {
    AppStore.unlisten(this.handleChange);
  }
  handleChange(state) {
    this.setState(state);
  }
  render() {
    return (
      <div id='app'>
        <Header pageTitle={this.state.pageTitle} />
        <div id='content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
