const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createLiveConsultation = {
  body: Joi.object().keys({
    user: Joi.string().required().custom(objectId),
    customers: Joi.array(),
    joiningTime: Joi.string().required(),
    leaveTime: Joi.string(),
  }),
};

const getLiveConsultations = {
  query: Joi.object().keys({
    user: Joi.string().custom(objectId),
    customers: Joi.array(),
    joiningTime: Joi.string(),
    leaveTime: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getLiveConsultation = {
  params: Joi.object().keys({
    liveConsultationId: Joi.string().custom(objectId),
  }),
};

const updateLiveConsultation = {
  params: Joi.object().keys({
    liveConsultationId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      user: Joi.string().custom(objectId),
      customers: Joi.array(),
      joiningTime: Joi.string(),
      leaveTime: Joi.string(),
    })
    .min(1),
};

const deleteLiveConsultation = {
  params: Joi.object().keys({
    liveConsultationId: Joi.string().custom(objectId),
  }),
};

const deleteLiveConsultations = {
  params: Joi.object().keys({
    liveConsultationId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createLiveConsultation,
  getLiveConsultations,
  getLiveConsultation,
  updateLiveConsultation,
  deleteLiveConsultation,
  deleteLiveConsultations,
};
