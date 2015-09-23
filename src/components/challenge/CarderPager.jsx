'use strict';

// Modules
import React from 'react';

// Actions
import CarderActions from '../../actions/CarderActions';

export default class CarderPager extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick(e) {
    let index = e.target.dataset.index;
    CarderActions.setCard(index);
  }
  render() {
    let pagerSize = this.props.size;
    let pager = [];
    let i = 1;
    while (i <= pagerSize) {
      pager.push(<span data-index={i} onClick={this.handleClick}>{i}</span>);
      ++i;
    }
    return (
      <div className='challenge-pager'>
        {pager}
      </div>
    )
  }
}
CarderPager.defaultProps = {
  size: 1
}
