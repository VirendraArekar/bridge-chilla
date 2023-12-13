const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createOffer = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    stateId: Joi.string().required().custom(objectId),
  }),
};

const getOffers = {
  query: Joi.object().keys({
    name: Joi.string(),
    stateId: Joi.string().custom(objectId),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getOffer = {
  params: Joi.object().keys({
    offerId: Joi.string().custom(objectId),
  }),
};

const updateOffer = {
  params: Joi.object().keys({
    offerId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      stateId: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteOffer = {
  params: Joi.object().keys({
    offerId: Joi.string().custom(objectId),
  }),
};

const deleteOffers = {
  params: Joi.object().keys({
    offerId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createOffer,
  getOffers,
  getOffer,
  updateOffer,
  deleteOffer,
  deleteOffers,
};
