const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createEmailSetting = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    stateId: Joi.string().required().custom(objectId),
  }),
};

const getEmailSettings = {
  query: Joi.object().keys({
    name: Joi.string(),
    stateId: Joi.string().custom(objectId),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getEmailSetting = {
  params: Joi.object().keys({
    emailSettingId: Joi.string().custom(objectId),
  }),
};

const updateEmailSetting = {
  params: Joi.object().keys({
    emailSettingId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      stateId: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteEmailSetting = {
  params: Joi.object().keys({
    emailSettingId: Joi.string().custom(objectId),
  }),
};

const deleteEmailSettings = {
  params: Joi.object().keys({
    emailSettingId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createEmailSetting,
  getEmailSettings,
  getEmailSetting,
  updateEmailSetting,
  deleteEmailSetting,
  deleteEmailSettings
};
