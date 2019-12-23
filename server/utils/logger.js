const chalk = require('chalk');
const log = console.log;

const info = (message) => {
  var logMessage = `[${new Date().toISOString()}] : INFO : ${message}`;
  log(chalk.blue(logMessage));
}

const warning = (message) => {
  var logMessage = `[${new Date().toISOString()}] : Warning : ${message}`;
  log(chalk.yellow(logMessage));
}

const error = (message) => {
  var logMessage = `[${new Date().toISOString()}] : Error : ${message}`;
  log(chalk.red(logMessage));
}

module.exports = {
  info,
  warning,
  error
}