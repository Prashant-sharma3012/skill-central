const logger = require('./utils/logger');
const fs = require('fs');

module.exports = (app) => {
  logger.info("Adding Routes");

  let files = fs.readdirSync('./routes');
  for(let i=0; i< files.length; i++){
    require(`./routes/${files[i]}`)(app);
  }

  logger.info("Routes Initialized");
}
