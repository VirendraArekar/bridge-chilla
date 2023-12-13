const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createFollowing = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    stateId: Joi.string().required().custom(objectId),
  }),
};

const getFollowings = {
  query: Joi.object().keys({
    name: Joi.string(),
    stateId: Joi.string().custom(objectId),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getFollowing = {
  params: Joi.object().keys({
    followingId: Joi.string().custom(objectId),
  }),
};

const updateFollowing = {
  params: Joi.object().keys({
    followingId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      stateId: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteFollowing = {
  params: Joi.object().keys({
    followingId: Joi.string().custom(objectId),
  }),
};

const deleteFollowings = {
  params: Joi.object().keys({
    followingId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createFollowing,
  getFollowings,
  getFollowing,
  updateFollowing,
  deleteFollowing,
  deleteFollowings,
};
