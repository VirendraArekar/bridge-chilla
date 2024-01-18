const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createUserPayment = {
  body: Joi.object().keys({
    user: Joi.string().required().custom(objectId),
    transactionId: Joi.number().required(),
    amount: Joi.number().required(),
    transactionType: Joi.string().required(),
  }),
};

const getUserPayments = {
  query: Joi.object().keys({
    user: Joi.string().custom(objectId),
    transactionId: Joi.number(),
    amount: Joi.number(),
    transactionType: Joi.string(),
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
      user: Joi.string().custom(objectId),
      transactionId: Joi.number(),
      amount: Joi.number(),
      transactionType: Joi.string(),
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
