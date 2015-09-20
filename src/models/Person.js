'use strict';

import { Schema } from 'mongoose';
import shortid from 'shortid';

const PersonSchema = new Schema({
  _id: { type: String, unique: true, default: shortid.generate },
  nickname: String,
  challenges: [{
    challengeRef: { type: String, ref: 'Challenge' }
  }],
  steps: [{
    stepRef: { type: String, ref: 'Step' },
    status: Boolean,
  }],
  entries: [{
    entryRef: { type: String, ref: 'Entry' }
  }],
  dateCreated: { type: Date, default: Date.now },
  dateUpdated: { type: Date }
});

const Person = mongoose.model('Person', PersonSchema);

export default Person;

