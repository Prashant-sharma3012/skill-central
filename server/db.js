const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.json')[env];

const models = {
    Employee: '',
    EmployeeSkill: '',
    Skill: '',
  }

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
});

module.exports = {
    sequelize,
    Sequelize,
    models
};