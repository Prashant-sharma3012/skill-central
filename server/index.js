const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const logger = require('./utils/logger');
const initRoutes = require('./initRoutes');
const auth = require('./middleware/auth');
const loginRoutes = require('./routes/login.route');
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

initRoutes(app);

module.exports = app;
