import alt from '../alt';
import ChallengeActions from '../actions/ChallengeActions';

class ChallengeStore {
  constructor() {
    this.bindActions(ChallengeActions);

    this.challengeName = 'Test Name';
  }
  onSetName(name) {
    this.challengeName = name;
  }
}

export default alt.createStore(ChallengeStore, 'ChallengeStore');
