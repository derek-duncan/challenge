import React from 'react';
import { RouteHandler } from 'react-router';

export default class HeaderTitle extends React.Component {
  render() {
    return (
      <h2 className='page-title'><i className='fa fa-location-arrow'></i>&nbsp;{this.props.pageTitle}</h2>
    );
  }
}

