const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.json')[env];
const seeder = require('./seeders');
const logger = require('./utils/logger');

const db = {};

let connected = false;

const models = {
  Employee: '',
  EmployeeSkill: '',
  Skill: '',
}

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

const initModels = async () => {
  logger.info("Initializing Models");
  // add models
  models.Employee = require('./models/employees')(sequelize, Sequelize.DataTypes);
  models.EmployeeSkill = require('./models/employeeSkill')(sequelize, Sequelize.DataTypes);
  models.Skill = require('./models/skills')(sequelize, Sequelize.DataTypes);

  logger.info("Models Initialized");
}

const initDBINstance = () => {
  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
  db.models = models;
}

const connect = async () => {
  if (connected) return;

  logger.info("Connecting to DB");
  await sequelize.authenticate();
  connected = true;
  await initModels();
  initDBINstance();
  await seeder.seed(db);

}

module.exports = { instance: db, connect }