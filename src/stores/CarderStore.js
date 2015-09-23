import alt from '../alt';
import CarderActions from '../actions/CarderActions';

class CarderStore {
  constructor() {
    this.bindActions(CarderActions);

    this.activeCard = 1;
  }
  setActiveCard(index) {
    this.activeCard = index;
  }
  onSetCard(index) {
    this.setActiveCard(index);
  }
  onPreviousCard() {
    this.activeCard -= 1;
  }
  onNextCard() {
    this.activeCard += 1;
  }
}

export default alt.createStore(CarderStore, 'CarderStore');
