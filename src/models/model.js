const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
      type: String,
      required: 'Enter a first name'
    },
    lastName: {
      type: String,
      required: 'Enter a last name'
    },
    userName: {
      type: String,
      required: 'Enter a username'
    },
    city: {
      type: String,
      required: 'Enter a city'
    },
    state: {
      type: String,
      required: 'Enter a state'
    },
    zip: {
      type: Number,
      required: 'Enter a zip code'
    },
    password: {
      type: String,
      required: 'Enter a password'
    },
  }
);

module.exports = UserSchema;
