import alt from '../alt';
import PageTitleActions from '../actions/PageTitleActions';

class PageTitleStore {
  constructor() {
    this.title = 'Challenge';

    this.bindActions(PageTitleActions);
  }
  onSet(title) {
    this.title = title;
  }
}

export default alt.createStore(PageTitleStore, 'PageTitleStore');

