const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createFcmSetting = {
  body: Joi.object().keys({
    serverKey: Joi.string().required(),
    clientKey: Joi.string().required(),
  }),
};

const getFcmSettings = {
  query: Joi.object().keys({
    serverKey: Joi.string(),
    clientKey: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getFcmSetting = {
  params: Joi.object().keys({
    fcmSettingId: Joi.string().custom(objectId),
  }),
};

const updateFcmSetting = {
  params: Joi.object().keys({
    fcmSettingId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      serverKey: Joi.string(),
      clientKey: Joi.string(),
    })
    .min(1),
};

const deleteFcmSetting = {
  params: Joi.object().keys({
    fcmSettingId: Joi.string().custom(objectId),
  }),
};

const deleteFcmSettings = {
  params: Joi.object().keys({
    fcmSettingId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createFcmSetting,
  getFcmSettings,
  getFcmSetting,
  updateFcmSetting,
  deleteFcmSetting,
  deleteFcmSettings,
};
