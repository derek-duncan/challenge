import alt from '../alt';
import CarderActions from '../actions/CarderActions';

class CarderStore {
  constructor() {
    this.bindActions(CarderActions);

    this.numberOfCards = 1;
    this.activeCard = 1;
    this.styles = {};
  }
  setActiveCard(index) {
    this.activeCard = index;
    this.styles.marginLeft = this.getOffset();
  }
  onSetNumberOfCards(number) {
    this.numberOfCards = number;
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
  getOffset() {
    return -(100 / Number(this.numberOfCards)) + '%';
  }
}

export default alt.createStore(CarderStore, 'CarderStore');
