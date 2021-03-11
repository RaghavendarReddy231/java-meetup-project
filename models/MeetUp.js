const mongoose =  require('mongoose');
const { Schema } = mongoose;
const Meetup = require('../models/')
  //creating user schema

  // const Meetup = new Meetup({
  //   name: String,
  //   description: String,
  //   meetingTime: { type : Date, default: Date.now },
  //   Address: String
  // });

const usersModel = mongoose.model('users', users);

module.exports = usersModel;