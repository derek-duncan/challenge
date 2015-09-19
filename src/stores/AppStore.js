import alt from '../alt';
import AppActions from '../actions/AppActions';

class AppStore {
  constructor() {
    this.title = 'Home';

    this.bindActions(AppActions);
  }
  onUpdateTitle(title) {
    this.title = title;
  }
}

export default alt.createStore(AppStore, 'AppStore');
