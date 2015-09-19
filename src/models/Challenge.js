'use strict';

import { Schema } from 'mongoose';
import shortid from 'shortid';

const ChallengeSchema = new Schema({
  _id: {
    type: String,
    unique: true,
    default: shortid.generate
  },
  name: String
});

const Challenge = mongoose.model('Challenge', ChallengeSchema);

export default Challenge;
