import alt from '../alt';
import CarderActions from '../actions/CarderActions';

class CarderStore {
  constructor() {
    this.bindActions(CarderActions);

    this.numberOfCards;
    this.activeCard = 1;
    this.cardWidth = 0;
    this.containerWidth = 100;
    this.offset = 0;
  }
  setActiveCard(index) {
    this.activeCard = index;
    this.offset = (index - 1) * this.cardWidth;
  }
  onSetNumberOfCards(number) {
    this.numberOfCards = number;
    this.cardWidth = parseFloat(100 / Number(this.numberOfCards), 10).toFixed(3);
    this.containerWidth = 100 * Number(this.numberOfCards);
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
