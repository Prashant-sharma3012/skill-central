const emp = require('./employees');
const empSkills = require('./employeeSkills');
const skills = require('./skills');
const logger = require('../utils/logger');

module.exports = {
  seed: async (db) => {
    try {
      logger.info("Seeding DB");
      await Promise.all([emp.up(db), empSkills.up(db), skills.up(db)]);
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
      await Promise.all([emp.down(db), empSkills.down(db), skills.down(db)]);
      logger.info("Cleaning Complete");
    } catch (err) {
      logger.error(err);
      logger.error("Error while cleaning, exiting...");
      process.exit(1);
    }
  },
}