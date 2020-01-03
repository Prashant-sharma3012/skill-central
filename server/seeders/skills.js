const seed = require('./seedData');
const logger = require('../utils/logger');

const up = async (db) => {
  let count = await db.models.Employee.findAll({where: {}});

  if(count.length){
    return logger.info("Employee table has data");
  }

  return db.models.Skill.bulkCreate(seed.skills, { timestamps: true });
}

const down = (db) => {
  return db.models.Skill.destroy({ where: {} });
}

module.exports = { up, down }