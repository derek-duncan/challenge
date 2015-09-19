import alt from '../alt';

class AppActions {
  constructor() {
    this.generateActions('updateTitle');
  }
}

export default alt.createActions(AppActions);
