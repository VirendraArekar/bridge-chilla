const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createSupport = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
  }),
};

const getSupports = {
  query: Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSupport = {
  params: Joi.object().keys({
    supportId: Joi.string().custom(objectId),
  }),
};

const updateSupport = {
  params: Joi.object().keys({
    supportId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string(),
    description: Joi.string(),
    })
    .min(1),
};

const deleteSupport = {
  params: Joi.object().keys({
    supportId: Joi.string().custom(objectId),
  }),
};

const deleteSupports = {
  params: Joi.object().keys({
    supportId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSupport,
  getSupports,
  getSupport,
  updateSupport,
  deleteSupport,
  deleteSupports,
};
