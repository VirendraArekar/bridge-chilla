const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createService = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    status: Joi.boolean().required(),
  }),
};

const getServices = {
  query: Joi.object().keys({
    name: Joi.string(),
    status: Joi.boolean(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getService = {
  params: Joi.object().keys({
    serviceId: Joi.string().custom(objectId),
  }),
};

const updateService = {
  params: Joi.object().keys({
    serviceId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      status: Joi.boolean(),
    })
    .min(1),
};

const deleteService = {
  params: Joi.object().keys({
    serviceId: Joi.string().custom(objectId),
  }),
};

const deleteServices = {
  params: Joi.object().keys({
    serviceId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createService,
  getServices,
  getService,
  updateService,
  deleteService,
  deleteServices,
};
