const seed = require('./seedData');
const logger = require('../utils/logger');

const up = async (db) => {
  let count = await db.models.skills.findAll({where: {}});

  if(count.length){
    return logger.info("Skills table has data");
  }

  return db.models.skills.bulkCreate(seed.skills, { timestamps: true });
}

const down = (db) => {
  return db.models.skills.destroy({ where: {} });
}

module.exports = { up, down }