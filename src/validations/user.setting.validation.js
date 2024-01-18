const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createUserSetting = {
  body: Joi.object().keys({
    user: Joi.string().required().custom(objectId),
    call: Joi.boolean().required(),
    chat: Joi.boolean().required(),
    live: Joi.boolean().required(),
    currency: Joi.string(),
    blockList: Joi.array(),
  }),
};

const getUserSettings = {
  query: Joi.object().keys({
    user: Joi.string().custom(objectId),
    call: Joi.boolean(),
    chat: Joi.boolean(),
    live: Joi.boolean(),
    currency: Joi.string(),
    blockList: Joi.array(),
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
      user: Joi.string().custom(objectId),
      call: Joi.boolean(),
      chat: Joi.boolean(),
      live: Joi.boolean(),
      currency: Joi.string(),
      blockList: Joi.array(),
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
