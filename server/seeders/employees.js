const seed = require('./seedData');
const logger = require('../utils/logger');

const up = async (db) => {
  let count = await db.models.Employee.findAll({where: {}});

  if(count.length){
    return logger.info("Employee table has data");
  }

  return db.models.Employee.bulkCreate(seed.employees, { timestamps: true });
}

const down = (db) => {
  return db.models.Employee.destroy({ where: {} });
}

module.exports = { up, down }