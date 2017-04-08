const mongoose = require('mongoose');
const db = require('../config.js');

const usersSchema = mongoose.Schema({
  favevents: [{type: Schema.Types.ObjectId, ref: 'Events'}],
  name: String,
  username: String,
  email: String,
});

let Users = mongoose.model('Users', usersSchema);
