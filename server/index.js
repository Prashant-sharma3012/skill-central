const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const logger = require('./utils/logger');
const appBootstrap = require('./app.bootstrap');
const db = require('./db');
const auth = require('./middleware/auth');
const loginRoutes = require('./routes/login.route');

logger.info("Starting App");

// test connection
logger.info("Connecting to DB");
db.sequelize.authenticate()
  .then(async () => {
    logger.info("Connected to DB");
    await appBootstrap.initModels(db);
  })
  .catch((err) => {
    logger.error('Error connectingto DB');
    logger.error(err);
  });

const app = express();

logger.info("Adding Middlewares");
// A bit of safe gaurding
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// keep login out of auth
loginRoutes(app);

// chk for token
app.use(auth.authenticate);

appBootstrap.initRoutes(app);

module.exports = app;
