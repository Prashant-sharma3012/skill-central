const db = require('../db');
const logger = require('../utils/logger');

const getUserDetailByEmail = async (req, res) => {
  try {
    let userDetails = await db.models.Employee.findOne({
      where: {
        email: req.query.email
      }
    });
    res.status(200).send(userDetails);
  } catch (err) {
    logger.error(err);
    res.status(500).send('An Error Occured, Please try again');
  }
}

const listUsers = async (req, res) => {
  try {
    let users = await db.models.Employee.findAll();
    res.status(200).send(users);
  } catch (err) {
    logger.error(err);
    res.status(500).send('An Error Occured, Please try again');
  }
}

const listUsersByExperience = async (req, res) => {
  try {
    let users = await db.models.Employee.findAll({
      where: {
        experience: {
          [Op.gt]: req.query.experience,
        }
      }
    });
    res.status(200).send(users);
  } catch (err) {
    logger.error(err);
    res.status(500).send('An Error Occured, Please try again');
  }
}

module.exports = {
  getUserDetailByEmail,
  listUsers,
  listUsersByExperience
}