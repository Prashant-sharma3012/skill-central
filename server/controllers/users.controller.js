const db = require('../db');
const logger = require('../utils/logger');
const response = require('../utils/response');

const getUserDetailByEmail = async (req, res) => {
  if (!req.query.email) {
    return response.clientError(res, 'Email Cannot be blank')
  }

  try {
    let userDetails = await db.instance.models.employees.findOne({
      where: {
        email: req.query.email
      }
    });

    return response.success(res, userDetails);
  } catch (err) {
    logger.error(err);
    return response.serverError(res, err);
  }
}

const listUsers = async (req, res) => {
  try {
    let users = await db.instance.models.employees.findAll();

    return response.success(res, users);
  } catch (err) {
    logger.error(err);
    return response.serverError(res, err);
  }
}

const listUsersByExperience = async (req, res) => {
  if (!req.query.experience) {
    return response.clientError(res, 'Experience Cannot be blank')
  }

  try {
    let users = await db.instance.models.employees.findAll({
      where: {
        experience: {
          [Op.gt]: req.query.experience,
        }
      }
    });

    return response.success(res, users);
  } catch (err) {
    logger.error(err);
    return response.serverError(res, err);
  }
}

module.exports = {
  getUserDetailByEmail,
  listUsers,
  listUsersByExperience
}