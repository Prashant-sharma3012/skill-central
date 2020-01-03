const seed = require('./seedData');
const logger = require('../utils/logger');

const up = async (db) => {
  let count = await db.models.EmployeeSkill.findAll({where: {}});

  if(count.length){
    return logger.info("Employee table has data");
  }

  return db.models.EmployeeSkill.bulkCreate(seed.employeeSkills, { timestamps: true });
}

const down = (db) => {
  return db.models.EmployeeSkill.destroy({ where: {} });
}

module.exports = { up, down }