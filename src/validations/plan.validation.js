const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createPlan = {
  body: Joi.object().keys({
    plan: Joi.string().required(),
    chat: Joi.boolean().required(),
    audioCall: Joi.boolean().required(),
    videoCall: Joi.boolean().required(),
    liveSession: Joi.boolean().required(),
    startDate: Joi.string().required(),
    endDate: Joi.string().required(),
    type: Joi.string().required(),
    description: Joi.string(),
  }),
};

const getPlans = {
  query: Joi.object().keys({
    plan: Joi.string(),
    chat: Joi.boolean(),
    audioCall: Joi.boolean(),
    videoCall: Joi.boolean(),
    liveSession: Joi.boolean(),
    startDate: Joi.string(),
    endDate: Joi.string(),
    type: Joi.string(),
    description: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getPlan = {
  params: Joi.object().keys({
    planId: Joi.string().custom(objectId),
  }),
};

const updatePlan = {
  params: Joi.object().keys({
    planId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      plan: Joi.string(),
      chat: Joi.boolean(),
      audioCall: Joi.boolean(),
      videoCall: Joi.boolean(),
      liveSession: Joi.boolean(),
      startDate: Joi.string(),
      endDate: Joi.string(),
      type: Joi.string(),
      description: Joi.string(),
    })
    .min(1),
};

const deletePlan = {
  params: Joi.object().keys({
    plan: Joi.string(),
    chat: Joi.boolean(),
    audioCall: Joi.boolean(),
    videoCall: Joi.boolean(),
    liveSession: Joi.boolean(),
    startDate: Joi.string(),
    endDate: Joi.string(),
    type: Joi.string(),
    description: Joi.string(),
  }),
};

const deletePlans = {
  params: Joi.object().keys({
    planId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createPlan,
  getPlans,
  getPlan,
  updatePlan,
  deletePlan,
  deletePlans,
};
