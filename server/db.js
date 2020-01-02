const Sequelize = require('sequelize');
const config = require('./config');

const models = {
    Employee: '',
    EmployeeSkill: '',
    Skill: '',
  }

var sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPwd, {
    host: config.dbHost,
    dialect: 'mysql'
});

module.exports = {
    sequelize,
    Sequelize,
    models
};