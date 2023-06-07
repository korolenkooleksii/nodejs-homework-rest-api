const { dataValidator, HttpError } = require("../helpers");
const { addContact } = require("../models/contacts");

const add = async (req, res, next) => {
  try {
    const { error } = await dataValidator(req.body);

    if (error) {
      const err = error.details[0].path[0];

      throw HttpError(400, `Missing required '${err}' field`)
    }

    const result = await addContact(req.body);

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = add;