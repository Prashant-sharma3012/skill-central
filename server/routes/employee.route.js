const employeeCtrl = require('../controllers/employee.controller');

module.exports = (app) => {
  app.get('/listEmployees', employeeCtrl.listEmployees);
  app.get('/getEmployeeByEmail', employeeCtrl.getEmployeesByEmail);
  app.get('/getEmployeeByExp', employeeCtrl.listEmployeesByExperience);
}