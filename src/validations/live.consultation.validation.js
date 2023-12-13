const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createLiveConsultation = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    stateId: Joi.string().required().custom(objectId),
  }),
};

const getLiveConsultations = {
  query: Joi.object().keys({
    name: Joi.string(),
    stateId: Joi.string().custom(objectId),
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
      name: Joi.string(),
      stateId: Joi.string().custom(objectId),
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
