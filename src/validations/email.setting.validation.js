const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createEmailSetting = {
  body: Joi.object().keys({
    smtpHost: Joi.string().required(),
    smtpPort: Joi.string().required(),
    smtpUsername: Joi.string().required(),
    smtpPassword: Joi.string().required(),
    emailFrom: Joi.string().required(),
  }),
};

const getEmailSettings = {
  query: Joi.object().keys({
    smtpHost: Joi.string(),
    smtpPort: Joi.string(),
    smtpUsername: Joi.string(),
    smtpPassword: Joi.string(),
    emailFrom: Joi.string(),
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
      smtpHost: Joi.string(),
      smtpPort: Joi.string(),
      smtpUsername: Joi.string(),
      smtpPassword: Joi.string(),
      emailFrom: Joi.string(),
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
