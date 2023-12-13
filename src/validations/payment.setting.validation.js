const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createPaymentSetting = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    stateId: Joi.string().required().custom(objectId),
  }),
};

const getPaymentSettings = {
  query: Joi.object().keys({
    name: Joi.string(),
    stateId: Joi.string().custom(objectId),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getPaymentSetting = {
  params: Joi.object().keys({
    paymentSettingId: Joi.string().custom(objectId),
  }),
};

const updatePaymentSetting = {
  params: Joi.object().keys({
    paymentSettingId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      stateId: Joi.string().custom(objectId),
    })
    .min(1),
};

const deletePaymentSetting = {
  params: Joi.object().keys({
    paymentSettingId: Joi.string().custom(objectId),
  }),
};

const deletePaymentSettings = {
  params: Joi.object().keys({
    paymentSettingId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createPaymentSetting,
  getPaymentSettings,
  getPaymentSetting,
  updatePaymentSetting,
  deletePaymentSetting,
  deletePaymentSettings,
};
