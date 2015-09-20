'use strict';

import { Schema } from 'mongoose';
import shortid from 'shortid';

const StepSchema = new Schema({
  _id: { type: String, unique: true, default: shortid.generate },
  challengeRef: { type: String, ref: 'Challenge'},
  name: String,
  order: Number,
  type: String,
  dateCreated: { type: Date, default: Date.now },
  dateUpdated: { type: Date }
});

const Step = mongoose.model('Step', StepSchema);

export default Step;

