const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createFollower = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    stateId: Joi.string().required().custom(objectId),
  }),
};

const getFollowers = {
  query: Joi.object().keys({
    name: Joi.string(),
    stateId: Joi.string().custom(objectId),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getFollower = {
  params: Joi.object().keys({
    followerId: Joi.string().custom(objectId),
  }),
};

const updateFollower = {
  params: Joi.object().keys({
    followerId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      stateId: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteFollower = {
  params: Joi.object().keys({
    followerId: Joi.string().custom(objectId),
  }),
};

const deleteFollowers = {
  params: Joi.object().keys({
    followerId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createFollower,
  getFollowers,
  getFollower,
  updateFollower,
  deleteFollower,
  deleteFollowers,
};
