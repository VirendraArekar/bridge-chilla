const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createTransaction = {
  body: Joi.object().keys({
    user: Joi.string().required().custom(objectId),
    // payment: Joi.string().required().custom(objectId),
    transactionId: Joi.number().required(),
    amount: Joi.number().required(),
    transactionType: Joi.string().required()
  }),
};

const getTransactions = {
  query: Joi.object().keys({
    user: Joi.string().custom(objectId),
    // payment: Joi.string().custom(objectId),
    transactionId: Joi.number(),
    amount: Joi.number(),
    transactionType: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getTransaction = {
  params: Joi.object().keys({
    transactionId: Joi.string().custom(objectId),
  }),
};

const updateTransaction = {
  params: Joi.object().keys({
    transactionId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      user: Joi.string().custom(objectId),
      // payment: Joi.string().custom(objectId),
      transactionId: Joi.number(),
      amount: Joi.number(),
      transactionType: Joi.string(),
    })
    .min(1),
};

const deleteTransaction = {
  params: Joi.object().keys({
    transactionId: Joi.string().custom(objectId),
  }),
};

const deleteTransactions = {
  params: Joi.object().keys({
    transactionId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createTransaction,
  getTransactions,
  getTransaction,
  updateTransaction,
  deleteTransaction,
  deleteTransactions,
};
