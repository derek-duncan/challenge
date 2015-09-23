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
  render() {
    let numberOfCards = this.props.children.props.children.length;
    let renderedChildren = React.Children.map(this.props.children, (child, i) => {
      return this.state.activeCard == (i + 1) ? React.cloneElement(child, { active: this.state.activeCard }) : child;
    });
    return (
      <div className='challenge-cards'>
        {renderedChildren}
        <CarderPager size={numberOfCards} active={this.state.activeCard} />
      </div>
    )
  }
}

