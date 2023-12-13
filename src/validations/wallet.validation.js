const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createWallet = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    stateId: Joi.string().required().custom(objectId),
  }),
};

const getWallets = {
  query: Joi.object().keys({
    name: Joi.string(),
    stateId: Joi.string().custom(objectId),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getWallet = {
  params: Joi.object().keys({
    walletId: Joi.string().custom(objectId),
  }),
};

const updateWallet = {
  params: Joi.object().keys({
    walletId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      stateId: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteWallet = {
  params: Joi.object().keys({
    walletId: Joi.string().custom(objectId),
  }),
};

const deleteWallets = {
  params: Joi.object().keys({
    walletId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createWallet,
  getWallets,
  getWallet,
  updateWallet,
  deleteWallet,
  deleteWallets,
};
