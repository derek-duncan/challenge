'use strict';

// Modules
import React from 'react';
import { RouteHandler } from 'react-router';

// Actions
import AppActions from '../actions/AppActions';

// Stores
import AppStore from '../stores/AppStore';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = AppStore.getState();
  }
  componentDidMount() {
    AppStore.listen(this._onChange.bind(this));
  }
  componentWillUnmount() {
    AppStore.unlisten(this._onChange);
  }
  _onChange(state) {
    this.setState(state);
  }
  _handleInputChange(e) {
    AppActions.updateTitle(e.target.value);
  }
  render() {
    return (
      <main>
        <h2>{this.state.title}</h2>
        <input onChange={this._handleInputChange} type='text' placeholder='Change the title...' />
        {this.props.children}
      </main>
    )
  }
}
