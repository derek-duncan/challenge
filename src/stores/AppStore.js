import alt from '../alt';
import AppActions from '../actions/AppActions';

class AppStore {
  constructor() {
    this.bindActions(AppActions);
  }
}

export default alt.createStore(AppStore, 'AppStore');
