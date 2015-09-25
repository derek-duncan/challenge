'use strict';

// Modules
import React from 'react';
import cx from 'classnames';

export default class Loader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let spinnerClasses = cx({
      'loader-spinner': true,
      'show': this.props.isLoading,
      'hide': !this.props.isLoading
    });
    let contentClasses = cx({
      'loader-content': true,
      'show': !this.props.isLoading,
      'hide': this.props.isLoading
    });
    return (
      <div className='loader' {...this.props}>
        <div className={spinnerClasses}>Loading...</div>
        <div className={contentClasses}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
Loader.defaultProps = {
  loading: false
};
