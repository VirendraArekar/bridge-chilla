const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createState = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    countryId: Joi.string().required().custom(objectId),
  }),
};

const getStates = {
  query: Joi.object().keys({
    name: Joi.string(),
    countryId: Joi.string().custom(objectId),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getState = {
  params: Joi.object().keys({
    stateId: Joi.string().custom(objectId),
  }),
};

const updateState = {
  params: Joi.object().keys({
    stateId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      countryId: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteState = {
  params: Joi.object().keys({
    stateId: Joi.string().custom(objectId),
  }),
};

const deleteStates = {
  params: Joi.object().keys({
    stateId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createState,
  getStates,
  getState,
  updateState,
  deleteState,
  deleteStates
};
