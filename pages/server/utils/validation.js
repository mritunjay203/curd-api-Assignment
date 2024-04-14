const Joi = require('joi');

const userSchema = Joi.object({
  username: Joi.string().required(),
  age: Joi.number().required(),
  hobbies: Joi.array().items(Joi.string()),
});

module.exports = { userSchema };
