const usersCtrl = require('../controllers/users.controller');

module.exports = (app) => {
  app.get('/listUsers', usersCtrl.listUsers);
  app.get('/getUserDetail', usersCtrl.getUserDetail);
  app.get('/getUsersByExp', usersCtrl.listUsersByExperience);
}