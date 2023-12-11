const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createCity = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    stateId: Joi.string().required().custom(objectId),
  }),
};

const getCities = {
  query: Joi.object().keys({
    name: Joi.string(),
    stateId: Joi.string().custom(objectId),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getCity = {
  params: Joi.object().keys({
    cityId: Joi.string().custom(objectId),
  }),
};

const updateCity = {
  params: Joi.object().keys({
    cityId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      stateId: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteCity = {
  params: Joi.object().keys({
    cityId: Joi.string().custom(objectId),
  }),
};

const deleteCities = {
  params: Joi.object().keys({
    cityId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createCity,
  getCities,
  getCity,
  updateCity,
  deleteCity,
  deleteCities
};
