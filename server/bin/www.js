var app = require('../index');
var http = require('http');
const logger = require('../utils/logger');

var port = process.env.PORT || '3000';
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
