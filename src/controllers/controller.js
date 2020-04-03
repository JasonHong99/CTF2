const mongoose = require('mongoose');
const UserSchema = require('./../models/model.js');

const User = mongoose.model('User', UserSchema);
const addNewUser = (req, res) => {
  console.log(req.body);
  var newUser = new User(req.body);
  newUser.save((err, user) => {
    if(err){
      res.send(err);
    }
    res.render('success');
  });
};

const getUser = (req, res) => {
  console.log(req);
  User.find({}, (err, user) => {
    if(err){
      res.send(err);
    }
    res.render('success');
  });
};

const getUserByID = (req, res) => {
  User.findById(req.params.userId, (err, user) => {
    if(err){
      res.send(err);
    }
    res.json(user);
  });
};

const updateUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.userId}, req.body, { new: true, useFindAndModify: false}, (err, user) => {
    if(err){
      res.send(err);
    }
    res.json(user);
  });
}

const deleteUser = (req, res) => {
  User.remove({ _id: req.params.userId}, (err, user) => {
    if(err){
      res.send(err);
    }
    res.json({ message : 'delete successfully'});
  });
}

const getUserByUserName = (req, res) => {
  User.find({ userName: req.params.userName}, (err, user) => {
    if(err){
      res.render('error');
    }
    if (user != ""){
      res.json(user);
    }
    else{
      res.render('error');
    }
  });
};

module.exports = {
  addNewUser,
  getUser,
  getUserByID,
  updateUser,
  deleteUser,
  getUserByUserName,
}
