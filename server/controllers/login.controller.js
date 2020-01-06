const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const response = require('../utils/response');
const store = require('../store/auth');
const logger = require('../utils/logger');


const register = async (req, res) => {
  if (!req.body.email || !req.body.pwd) {
    return response.clientError(res, "email or password is wrong");
  }

  let email = req.body.email;
  let pwd = req.body.pwd;

  let hash = await bcrypt.hash(pwd, 10);

  try {
    await store.createUser({ email, hash });
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