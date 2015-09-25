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

    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    CarderStore.listen(this.onChange);
    CarderActions.setNumberOfCards(React.Children.count(this.props.children));
  }
  componentWillUnmount() {
    CarderStore.unlisten(this.onChange);
  }
  onChange() {
    this.setState(getCarderState());
  }
  render() {
    let renderedChildren = React.Children.map(this.props.children, (child, i) => {
      return React.cloneElement(child, {
        active: this.state.activeCardNumber,
        cardNumber: i + 1,
        cardWidth: this.state.cardRealWidth
      });
    });
    let styles = {
      transform: `translateX(${-this.state.containerViewOffset}%)`,
      width: `${this.state.containerWidth}%`
    };
    return (
      <div className='challenge-carder'>
        <div className='carder-viewer'>
          <div className='carder-container' style={styles}>
            {renderedChildren}
          </div>
        </div>
        <CarderPager size={this.state.numberOfCards} active={this.state.activeCardNumber} />
      </div>
    )
  }
}

