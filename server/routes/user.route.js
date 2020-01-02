const usersCtrl = require('../controllers/users.controller');

module.exports = (app) => {
  app.get('/listUsers', usersCtrl.listUsers);
  app.get('/getUserDetailByEmail', usersCtrl.getUserDetailByEmail);
  app.get('/getUsersByExp', usersCtrl.listUsersByExperience);
}