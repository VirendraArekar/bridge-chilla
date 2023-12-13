const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createUserSetting = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    stateId: Joi.string().required().custom(objectId),
  }),
};

const getUserSettings = {
  query: Joi.object().keys({
    name: Joi.string(),
    stateId: Joi.string().custom(objectId),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUserSetting = {
  params: Joi.object().keys({
    userSettingId: Joi.string().custom(objectId),
  }),
};

const updateUserSetting = {
  params: Joi.object().keys({
    userSettingId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      stateId: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteUserSetting = {
  params: Joi.object().keys({
    userSettingId: Joi.string().custom(objectId),
  }),
};

const deleteUserSettings = {
  params: Joi.object().keys({
    userSettingId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUserSetting,
  getUserSettings,
  getUserSetting,
  updateUserSetting,
  deleteUserSetting,
  deleteUserSettings,
};
