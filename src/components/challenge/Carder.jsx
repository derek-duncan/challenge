'use strict';

// Modules
import React from 'react';

// Stores
import CarderStore from '../../stores/CarderStore';

// Components
import CarderPager from './CarderPager.jsx';

// Actions
import CarderActions from '../../actions/CarderActions';

function getCarderState() {
  return CarderStore.getState();
}

export default class Carder extends React.Component {
  constructor(props) {
    super(props);
    this.state = getCarderState();

    let numberOfCards = React.Children.count(this.props.children);
    CarderActions.setNumberOfCards(numberOfCards);

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
    console.log(this.state);
  }
  render() {
    let renderedChildren = React.Children.map(this.props.children, (child, i) => {
      return React.cloneElement(child, { active: this.state.activeCard, index: i + 1 });
    });
    console.log(this.state.styles);
    return (
      <div className='challenge-carder'>
        <div className='carder-viewer'>
          <div className='carder-container' style={this.state.styles}>
            {renderedChildren}
          </div>
        </div>
        <CarderPager size={this.state.numberOfCards} active={this.state.activeCard} />
      </div>
    )
  }
}

