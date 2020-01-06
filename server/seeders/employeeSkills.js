const seed = require('./seedData');
const logger = require('../utils/logger');

const up = async (db) => {
  let count = await db.models.employeeSkill.findAll({where: {}});

  if(count.length){
    return logger.info("Employee Skill table has data");
  }

  return db.models.employeeSkill.bulkCreate(seed.employeeSkills, { timestamps: true });
}

const down = (db) => {
  return db.models.employeeSkill.destroy({ where: {} });
}

module.exports = { up, down }