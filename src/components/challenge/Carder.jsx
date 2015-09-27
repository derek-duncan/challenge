'use strict';

// Modules
import React from 'react';

// Stores
import CarderStore from '../../stores/CarderStore';

// Components
import CarderPager from './CarderPager.jsx';
import Hammer from 'react-hammerjs';

// Actions
import CarderActions from '../../actions/CarderActions';

function getCarderState() {
  return CarderStore.getState();
}

export default class Carder extends React.Component {
  constructor(props) {
    super(props);
    this.state = getCarderState();

    this.xDown = null;
    this.onChange = this.onChange.bind(this);
    this.handleSwipe = this.handleSwipe.bind(this);
  }
  componentWillMount() {
    React.initializeTouchEvents(true);
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
  handleSwipe(e) {
    if (e.direction === 4) { // right
      CarderActions.previousCard();
    } else if (e.direction === 2) { // left
      CarderActions.nextCard();
    }
  };
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
          <Hammer onSwipe={this.handleSwipe}>
            <div className='carder-container' style={styles}>
              {renderedChildren}
            </div>
          </Hammer>
        </div>
        <CarderPager size={this.state.numberOfCards} active={this.state.activeCardNumber} />
      </div>
    )
  }
}

