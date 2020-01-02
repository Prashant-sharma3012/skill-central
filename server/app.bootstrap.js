const logger = require('./utils/logger');

const initRoutes = (app) => {
  logger.info("Adding Routes");
  // add routes
  require('./routes/user.route')(app);
  require('./routes/skills.route')(app);
  require('./routes/userSkills.route')(app);

  logger.info("Routes Initialized");
}

const initModels = (db) => {
  logger.info("Initializing Models");
  // add models
  db.models.Employee = require('./models/emp.model')(db.sequelize, db.Sequelize.DataTypes);
  db.models.EmployeeSkill = require('./models/empSkill.model')(db.sequelize, db.Sequelize.DataTypes);
  db.models.Skill = require('./models/skill.model')(db.sequelize, db.Sequelize.DataTypes);

  logger.info("Models Initialized");
}


module.exports = {
  initRoutes,
  initModels
}