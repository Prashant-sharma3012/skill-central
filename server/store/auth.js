const db = require('../db');

const createUser = async (user) => db.instance.models.employeeAuth
  .build({
    email: user.email,
    pwd: user.hash
  }).save();

const getPassword = async (email) => db.instance.models.employeeAuth.findOne({
  where: { email }
});

module.exports = {
  createUser,
  getPassword
}