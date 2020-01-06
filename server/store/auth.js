const db = require('../db');

const createUser = async (user) => {

}

const getPassword = async (email) => await db.instance.models.employeeAuth.findOne({
  where: { email }
});

module.exports = {
  createUser,
  getPassword
}