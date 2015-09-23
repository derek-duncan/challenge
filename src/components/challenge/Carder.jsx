'use strict';

// Modules
import React from 'react';

// Stores
import CarderStore from '../../stores/CarderStore';

// Components
import CarderPager from './CarderPager.jsx';

function getCarderState() {
  return CarderStore.getState();
}

export default class Carder extends React.Component {
  constructor(props) {
    super(props);
    this.state = getCarderState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    CarderStore.listen(this.onChange);
  }
  componentWillUnmount() {
    CarderStore.unlisten(this.onChange);
  }
  onChange() {
    this.setState(getCarderState());
  }
  renderChildren() {
    let children = React.Children.map(this.props.children, (child, i) => {
      i = i + 1;
      if (i === this.state.activeCard) {
        return React.cloneElement(child, {
          active: true
        });
      } else {
        return child;
      }
    });
    return children;
  }
  render() {
    let numberOfCards = this.props.children.props.children.length;
    return (
      <div className='challenge-cards'>
        {this.renderChildren()}
        <CarderPager size={numberOfCards} active={this.state.activeCard} />
      </div>
    )
  }
}

