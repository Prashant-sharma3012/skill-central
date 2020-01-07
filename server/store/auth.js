const db = require('../db');

const createEmployee = async (userdetails, t) => db.instance.models.employees
  .build({
    emp_id: userdetails.empId,
    emp_fname: userdetails.fname,
    emp_lname: userdetails.lname,
    email: userdetails.email,
    experience: userdetails.exp,
    profile_picture: userdetails.profilePic,
  }).save({ transaction: t });

const createAuthRecord = async (userdetails, t) => db.instance.models.employeeAuth
  .build({
    email: userdetails.email,
    pwd: userdetails.hash
  }).save({ transaction: t });

const register = async (userDetails) => db.instance.sequelize
  .transaction(t => Promise.all([createEmployee(userDetails, t), createAuthRecord(userDetails, t)]));

const getPassword = async (email) => db.instance.models.employeeAuth.findOne({
  where: { email }
});

module.exports = {
  register,
  getPassword
}