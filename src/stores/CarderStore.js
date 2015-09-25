import alt from '../alt';
import CarderActions from '../actions/CarderActions';

class CarderStore {
  constructor() {
    this.bindActions(CarderActions);

    this.numberOfCards;
    this.activeCardNumber = 1;

    this.cardFullWidth = 0;
    this.cardRealWidth = 0;
    this.cardWidthOffset = 8;

    this.containerWidth = 100;
    this.containerViewOffset = -(this.cardWidthOffset / 2);
  }
  setActiveCard(cardNumber) {
    let cardWidthOffsetCenter = this.cardWidthOffset / 2;
    let index = cardNumber - 1;

    this.activeCardNumber = cardNumber;
    this.containerViewOffset = index * this.cardRealWidth - cardWidthOffsetCenter;
  }
  onSetNumberOfCards(number) {
    this.numberOfCards = number;
    this.cardFullWidth = parseFloat(100 / Number(this.numberOfCards), 10).toFixed(3);
    this.cardRealWidth = this.cardFullWidth - this.cardWidthOffset;
    this.containerWidth = 100 * Number(this.numberOfCards);
  }
  onSetCard(cardNumber) {
    this.setActiveCard(cardNumber);
  }
  onPreviousCard() {
    this.activeCardNumber -= 1;
  }
  onNextCard() {
    this.activeCardNumber += 1;
  }
}

export default alt.createStore(CarderStore, 'CarderStore');
