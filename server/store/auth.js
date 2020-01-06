const db = require('../db');

const createEmployee = async (userdetails) => db.instance.models.employees
  .build({
    emp_id: userdetails.empId,
    emp_fname: userdetails.fname,
    emp_lname: userdetails.lname,
    email: user.email,
    experience: userdetails.exp,
    profile_picture: userdetails.profilePic,
  }).save();

const createAuthRecord = async (userdetails) => db.instance.models.employees
.build({
  email: userdetails.email,
  pwd: userdetails.hash
}).save();

const register = async (userDetails) => db.sequelize
  .transaction(t => Promise.all([createEmployee(userDetails), createAuthRecord(userDetails)]));

const getPassword = async (email) => db.instance.models.employeeAuth.findOne({
  where: { email }
});

module.exports = {
  register,
  getPassword
}