import alt from '../alt';

class CarderActions {
  constructor() {
    this.generateActions(
      'nextCard',
      'previousCard',
      'setCard',
      'setNumberOfCards'
    );
  }
}

export default alt.createActions(CarderActions);
