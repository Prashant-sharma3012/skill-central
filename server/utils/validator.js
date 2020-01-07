const Joi = require('@hapi/joi');

const registerPayload = Joi.object({
  empId: Joi.number().min(1000).required(),
  fname: Joi.string().min(2).max(30).required(),
  lname: Joi.string().min(2).max(30),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','in'] } }),
  exp: Joi.number().min(1).required(),
  profilePic: Joi.string().uri(),
  pwd: Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).min(8).required(),
});

const validateRegisterPayload = (payload) => registerPayload.validate(payload, {abortEarly: false});

module.exports= {
  validateRegisterPayload
}