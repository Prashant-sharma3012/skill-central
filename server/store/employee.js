const db = require('../db');

const getEmployeesByEmail = async (email) => db.instance.models.employees.findOne({
  where: { email }
});

const listEmployees = async () => db.instance.models.employees.findAll();

const listEmployeesByExperience = async (exp) => db.instance.models.employees.findAll({
  where: {
    experience: {
      [Op.gt]: exp,
    }
  }
});

module.exports = {
  getEmployeesByEmail,
  listEmployees,
  listEmployeesByExperience
}