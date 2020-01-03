const logger = require('./utils/logger');

module.exports = (app) => {
  logger.info("Adding Routes");
  // add routes
  require('./routes/user.route')(app);
  require('./routes/skills.route')(app);
  require('./routes/userSkills.route')(app);

  logger.info("Routes Initialized");
}
