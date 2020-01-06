const logger = require('../utils/logger');
const fs = require('fs');

const getSeeders = () => fs.readdirSync(__dirname).filter(e => e !== 'index.js' && e !== 'seedData.js');

module.exports = {
  seed: async (db) => {
    try {
      logger.info("Seeding DB");
      await Promise.all(getSeeders().map(filename => require(`./${filename}`).up(db)));
      logger.info("Seeding Complete");
    } catch (err) {
      logger.error(err);
      logger.error("Error while seeding, exiting...");
      process.exit(1);
    }
  },
  clean: async (db) => {
    try {
      logger.info("Cleaning DB");
      await Promise.all(getSeeders().map(filename => require(`./${filename}`).down(db)));
      logger.info("Cleaning Complete");
    } catch (err) {
      logger.error(err);
      logger.error("Error while cleaning, exiting...");
      process.exit(1);
    }
  },
}