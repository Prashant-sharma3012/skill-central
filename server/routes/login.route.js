const loginCtrl = require('../controllers/login.controller');

module.exports = (app) => {
  app.post('/register', loginCtrl.register);
  app.post('/login', loginCtrl.login);
}