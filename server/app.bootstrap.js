const logger = require('./utils/logger');
const seeder = require('./seeders');

const initRoutes = (app) => {
  logger.info("Adding Routes");
  // add routes
  require('./routes/user.route')(app);
  require('./routes/skills.route')(app);
  require('./routes/userSkills.route')(app);

  logger.info("Routes Initialized");
}

const initModels = async (db) => {
  logger.info("Initializing Models");
  // add models
  db.models.Employee = require('./models/employees')(db.sequelize, db.Sequelize.DataTypes);
  db.models.EmployeeSkill = require('./models/employeeSkill')(db.sequelize, db.Sequelize.DataTypes);
  db.models.Skill = require('./models/skills')(db.sequelize, db.Sequelize.DataTypes);

  logger.info("Models Initialized");
  await seeder(db);
}


module.exports = {
  initRoutes,
  initModels
}