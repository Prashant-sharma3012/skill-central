const logger = require('../utils/logger');
const response = require('../utils/response');
const store = require('../store/employee');

const getEmployeesByEmail = async (req, res) => {
  if (!req.query.email) {
    return response.clientError(res, 'Email Cannot be blank')
  }

  try {
    let userDetails = await store.getEmployeesByEmail(req.query.email);
    return response.success(res, userDetails);
  } catch (err) {
    logger.error(err);
    return response.serverError(res, err);
  }
}

const listEmployees = async (req, res) => {
  try {
    let users = await store.listEmployees();
    return response.success(res, users);
  } catch (err) {
    logger.error(err);
    return response.serverError(res, err);
  }
}

const listEmployeesByExperience = async (req, res) => {
  if (!req.query.experience) {
    return response.clientError(res, 'Experience Cannot be blank')
  }

  try {
    let users = await store.listEmployeesByExperience(req.query.experience);
    return response.success(res, users);
  } catch (err) {
    logger.error(err);
    return response.serverError(res, err);
  }
}

module.exports = {
  getEmployeesByEmail,
  listEmployees,
  listEmployeesByExperience
}