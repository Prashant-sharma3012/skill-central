const express  = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const logger = require('./utils/logger');

// DB
const db = require('./db');

//Routes
const loginRoutes = require('./routes/login.route');
const userRoutes = require('./routes/user.route');
const skillRoutes = require('./routes/skills.route');
const userSkillRoutes = require('./routes/userSkills.route');

logger.info("Initializing");

logger.info("Connecting to DB");

// test connection
db.sequelize.authenticate()
  .then(() => {
    logger.info("Connected to DB");
  })
  .catch((err) => {
    logger.error('Error connectingto DB');
    logger.error(err);
  });

// middleware
const auth = require('./middleware/auth');

const app = express();

logger.info("Adding Middlewares");
// A bit of safe gaurding
app.use(helmet());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// keep login out of ath
loginRoutes(app);

// chk for token
app.use(auth.authenticate);

logger.info("Bootstrapping App");

// add routes
userRoutes(app);
skillRoutes(app);
userSkillRoutes(app);

module.exports = app;
