import alt from '../alt';
import AppActions from '../actions/AppActions';

class AppStore {
  constructor() {
    this.bindActions(AppActions);
  }
  onSetPageTitle(title) {
    this.pageTitle = title;
    if (typeof window !== 'undefined') {
      document.title = title;
    }
  }
}

export default alt.createStore(AppStore, 'AppStore');
