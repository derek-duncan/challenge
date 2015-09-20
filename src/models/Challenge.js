'use strict';

import { Schema } from 'mongoose';
import shortid from 'shortid';

const ChallengeSchema = new Schema({
  _id: { type: String, unique: true, default: shortid.generate },
  name: String,
  details: String,
  dateEnd: { type: Date },
  wager: { type: String },
  steps: [{
    stepRef: { type: String, ref: 'Step'},
  }],
  url: String,
  privacy: String,
  dateCreated: { type: Date, default: Date.now },
  dateUpdated: { type: Date }
});

const Challenge = mongoose.model('Challenge', ChallengeSchema);

export default Challenge;
