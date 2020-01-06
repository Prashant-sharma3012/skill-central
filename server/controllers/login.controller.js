const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const response = require('../utils/response');
const store = require('../store/auth');
const logger = require('../utils/logger');
const validator = require('../utils/validator');

const register = async (req, res) => {
  let { error } = validator.validateRegisterPayload(req.body);

  if (error) {
    return response.clientError(res, error);
  }

  let userDetails = req.body;
  userDetails.hash = await bcrypt.hash(userDetails.pwd, 10);

  try {
    await store.register(userDetails);
    // ideally i should return the created user details along with jwt, for now lets be simple
    return response.success(res, 'Registered Successfully');
  } catch (err) {
    logger.error(err);
    return response.serverError(res, err);
  }
}

const login = async (req, res) => {
  if (!req.body.email || !req.body.pwd) {
    return response.clientError(res, "email or password is wrong");
  }

  let email = req.body.email;
  let pwd = req.body.pwd;

  try {
    let hash = await store.getPassword(email);
    await bcrypt.compare(pwd, hash);
    // ideally i should return the created user details along with jwt, for now lets be simple
    return response.success('login Successful')
  } catch (err) {
    logger.error(err);
    return response.serverError(res, err)
  }
}

module.exports = {
  register,
  login
}