const Sequelize = require('sequelize');
const config = require('./config');


var sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPwd, {
    host: config.dbHost,
    dialect: 'mysql'
});

module.exports = {
    sequelize,
    Sequelize
};