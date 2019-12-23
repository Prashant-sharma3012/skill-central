const Sequelize = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(`mysql://${config.dbUser}:${config.dbPwd}@${config.dbHost}:${config.dbPort}/${config.dbName}`);

module.exports = {
    sequelize,
    Sequelize
};