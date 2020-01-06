const db = require('../db');

const getEmployeesByEmail = async (email) => await db.instance.models.employees.findOne({
  where: { email }
});

const listEmployees = async () => await db.instance.models.employees.findAll();

const listEmployeesByExperience = async (exp) => await db.instance.models.employees.findAll({
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