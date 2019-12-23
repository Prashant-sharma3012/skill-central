const Sequelize = require('sequelize');
const config = require('./config');
const sequelize = new Sequelize(`mysql://${config.dbUser}:${config.dbPwd}@localhost:3306/skillcentral`);

module.exports = {
    sequelize,
    Sequelize
};