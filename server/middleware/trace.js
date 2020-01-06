const logger = require('../utils/logger');

module.exports = (req,res,next) => {
  logger.info(`${req.method} - ${req.path} - Query / body: ${JSON.stringify(req.query)} / ${JSON.stringify(req.body)} `);
  next();
}
