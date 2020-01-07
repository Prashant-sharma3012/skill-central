const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const response = require('../utils/response');
const authStore = require('../store/auth');
const empStore = require('../store/employee');
const logger = require('../utils/logger');
const validator = require('../utils/validator');

const register = async (req, res) => {
  let { error } = validator.validateRegisterPayload(req.body);
  if (error) {
    return response.clientError(res, error);
  }

  try {
    // check if user already exixts
    let userDetails = req.body;

    let employee = await empStore.getEmployeesByEmail(userDetails.email);
    if (employee) {
      return response.clientError(res, 'User Already Exists');
    }

    userDetails.hash = await bcrypt.hash(userDetails.pwd, 10);

    await authStore.register(userDetails);

    // get user details
    employee = await empStore.getEmployeesByEmail(userDetails.email);

    let token = jwt.sign(employee.dataValues, 'supersecret', { expiresIn: 6 * 60 * 60 });

    // ideally i should return the created user details along with jwt, for now lets be simple
    return response.success(res, {token, message:'Registered Successfully'});
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
    let hash = await authStore.getPassword(email);
    await bcrypt.compare(pwd, hash);

    // get user details
    let employee = await empStore.getEmployeesByEmail(email);

    let token = jwt.sign(employee.dataValues, 'supersecret', { expiresIn: 6 * 60 * 60 });

    // ideally i should return the created user details along with jwt, for now lets be simple
    return response.success({token, message: "login successful"})
  } catch (err) {
    logger.error(err);
    return response.serverError(res, err)
  }
}

module.exports = {
  register,
  login
}