'use strict';

import { Schema } from 'mongoose';
import shortid from 'shortid';

const EntrySchema = new Schema({
  _id: { type: String, unique: true, default: shortid.generate },
  stepRef: { type: String, ref: 'Step' },
  name: String,
  value: String,
  dateCreated: { type: Date, default: Date.now },
  dateUpdated: { type: Date }
});

const Entry = mongoose.model('Entry', EntrySchema);

export default Entry;


