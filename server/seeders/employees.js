const seed = require('./seedData');
const logger = require('../utils/logger');

const up = async (db) => {
  let count = await db.models.employees.findAll({where: {}});

  if(count.length){
    return logger.info("Employee table has data");
  }

  return db.models.employees.bulkCreate(seed.employees, { timestamps: true });
}

const down = (db) => {
  return db.models.employees.destroy({ where: {} });
}

module.exports = { up, down }