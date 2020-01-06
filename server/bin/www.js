var http = require('http');
const logger = require('../utils/logger');
const db = require('../db');

var port = process.env.PORT || '3000';

logger.info("Starting App");

db.connect().then(() => {
  var app = require('../index');
  app.set('port', port);
  var server = http.createServer(app);

  server.listen(port, (err) => {
    if(err){
      logger.error(err);
      logger.error("An Error Occured, Quiting!!");
      process.exit(1);
    }
  
    logger.info(`Server up and running on port - ${port}`);
  });
  
}).catch((err) => {
  logger.error(err);
  process.exit(1);
})

