const joi = require("joi");

let validation = {
  vSaveCategory: async (request, response, next) => {
    let schema = joi.object({
      name: joi.string().alphanum().min(3),
    });
    try {
      await schema.validateAsync(request.body);
      next();
    } catch (error) {
      response
        .status(400)
        .send({ status: false, message: error.details[0].message });
      return false;
    }
  },
  vUpdateCategory: async (request, response, next) => {
    let schema = joi.object({
      name: joi.string().alphanum().min(3),
      id: joi.string(),
    });
    try {
      await schema.validateAsync(request.body);
      next();
    } catch (error) {
      response
        .status(400)
        .send({ status: false, message: error.details[0].message });
      return false;
    }
  },
};

module.exports = validation;
