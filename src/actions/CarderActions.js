import alt from '../alt';

class CarderActions {
  constructor() {
    this.generateActions(
      'nextCard',
      'previousCard',
      'setCard'
    );
  }
}

export default alt.createActions(CarderActions);
