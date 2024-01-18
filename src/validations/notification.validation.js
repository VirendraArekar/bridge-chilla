const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createNotification = {
  body: Joi.object().keys({
    user: Joi.string().required().custom(objectId),
    notification: Joi.string().required(),
    priority: Joi.number().required(),
    readIt:  Joi.boolean().required(),
  }),
};

const getNotifications = {
  query: Joi.object().keys({
    user: Joi.string().custom(objectId),
    notification: Joi.string(),
    priority: Joi.number(),
    readIt:  Joi.boolean(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getNotification = {
  params: Joi.object().keys({
    notificationId: Joi.string().custom(objectId),
  }),
};

const updateNotification = {
  params: Joi.object().keys({
    notificationId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      user: Joi.string().custom(objectId),
      notification: Joi.string(),
      priority: Joi.number(),
      readIt:  Joi.boolean(),
    })
    .min(1),
};

const deleteNotification = {
  params: Joi.object().keys({
    notificationId: Joi.string().custom(objectId),
  }),
};

const deleteNotifications = {
  params: Joi.object().keys({
    notificationId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createNotification,
  getNotifications,
  getNotification,
  updateNotification,
  deleteNotification,
  deleteNotifications,
};
