const addNewUser = require('./../controllers/controller.js').addNewUser;
const getUser = require('./../controllers/controller.js').getUser;
const getUserByID = require('./../controllers/controller.js').getUserByID;
const updateUser = require('./../controllers/controller.js').updateUser;
const deleteUser = require('./../controllers/controller.js').deleteUser;
const getUserByUserName = require('./../controllers/controller.js').getUserByUserName;

const routes = (app) => {
  app.route('/users/:userName')
  .get(getUserByUserName)
  .post(addNewUser)
  .put(updateUser)
  .delete(deleteUser);

}

module.exports = routes;
