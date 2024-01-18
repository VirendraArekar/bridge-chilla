const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createEvent = {
  body: Joi.object().keys({
    user: Joi.string().required().custom(objectId),
    name: Joi.string().required(),
    title: Joi.string().required(),
    eventDateTime: Joi.string().required(),
    eventStartTime: Joi.string().required(),
    eventEndTime: Joi.string(),
    description: Joi.string().required(),
  }),
};

const getEvents = {
  query: Joi.object().keys({
    user: Joi.string().custom(objectId),
    name: Joi.string(),
    title: Joi.string(),
    eventDateTime: Joi.string(),
    eventStartTime: Joi.string(),
    eventEndTime: Joi.string(),
    description: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getEvent = {
  params: Joi.object().keys({
    eventId: Joi.string().custom(objectId),
  }),
};

const updateEvent = {
  params: Joi.object().keys({
    eventId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      user: Joi.string().custom(objectId),
      name: Joi.string(),
      title: Joi.string(),
      eventDateTime: Joi.string(),
      eventStartTime: Joi.string(),
      eventEndTime: Joi.string(),
      description: Joi.string(),
    })
    .min(1),
};

const deleteEvent = {
  params: Joi.object().keys({
    eventId: Joi.string().custom(objectId),
  }),
};

const deleteEvents = {
  params: Joi.object().keys({
    eventId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createEvent,
  getEvents,
  getEvent,
  updateEvent,
  deleteEvent,
  deleteEvents,
};
