const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createUserPayment = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    stateId: Joi.string().required().custom(objectId),
  }),
};

const getUserPayments = {
  query: Joi.object().keys({
    name: Joi.string(),
    stateId: Joi.string().custom(objectId),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUserPayment = {
  params: Joi.object().keys({
    userPaymentId: Joi.string().custom(objectId),
  }),
};

const updateUserPayment = {
  params: Joi.object().keys({
    userPaymentId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      stateId: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteUserPayment = {
  params: Joi.object().keys({
    userPaymentId: Joi.string().custom(objectId),
  }),
};

const deleteUserPayments = {
  params: Joi.object().keys({
    userPaymentId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUserPayment,
  getUserPayments,
  getUserPayment,
  updateUserPayment,
  deleteUserPayment,
  deleteUserPayments,
};
