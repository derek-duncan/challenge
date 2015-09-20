'use strict';

// Modules
import React from 'react';
import { RouteHandler } from 'react-router';

// Actions
import AppActions from '../actions/AppActions';
import PageTitleActions from '../actions/PageTitleActions';

// Stores
import AppStore from '../stores/AppStore';
import PageTitleStore from '../stores/PageTitleStore';

// Components
import Header from '../components/Header.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = AppStore.getState();
    if (typeof window !== 'undefined') {
      document.title = PageTitleStore.getState().title;
    }
  }
  componentDidMount() {
    PageTitleStore.listen(this._handlePageTitleChange.bind(this));
  }
  componentWillUnmount() {
    PageTitleStore.unlisten(this._handlePageTitleChange);
  }
  _handlePageTitleChange({ title }) {
    document.title = title;
  }
  _handleInputChange(e) {
    PageTitleActions.set(e.target.value);
  }
  render() {
    return (
      <main>
        <Header />
        <input onChange={this._handleInputChange} type='text' placeholder='Change the page title...' />
        {this.props.children}
      </main>
    )
  }
}
