const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.json')[env];
const seeder = require('./seeders');
const logger = require('./utils/logger');
const fs = require('fs');

const db = {};

let connected = false;

const models = {}

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

const initModels = async () => {
  logger.info("Initializing Models");
  
  let files = fs.readdirSync('./models');
  for(let i=0; i< files.length; i++){
    models[files[i].split('.')[0]] = require(`./models/${files[i]}`)(sequelize, Sequelize.DataTypes);
  }

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