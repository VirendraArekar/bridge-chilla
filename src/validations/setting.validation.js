const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createSetting = {
  body: Joi.object().keys({
    appName: Joi.string().required(),
  }),
};

const getSettings = {
  query: Joi.object().keys({
    appName: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSetting = {
  params: Joi.object().keys({
    settingId: Joi.string().custom(objectId),
  }),
};

const updateSetting = {
  params: Joi.object().keys({
    settingId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      appName: Joi.string(),
    })
    .min(1),
};

const deleteSetting = {
  params: Joi.object().keys({
    settingId: Joi.string().custom(objectId),
  }),
};

const deleteSettings = {
  params: Joi.object().keys({
    settingId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSetting,
  getSettings,
  getSetting,
  updateSetting,
  deleteSetting,
  deleteSettings,
};
