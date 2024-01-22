const Joi = require('joi');
const { objectId } = require('./custom.validation');
const ImageExtension = require('joi-image-extension');
// const Joi = JoiBase.extend(ImageExtension)

const createOffer = {
  body: Joi.object().keys({
    user: Joi.string().required().custom(objectId),
    title: Joi.string().required(),
    subTitle: Joi.string().required(),
    description: Joi.string(),
    // image: JoiImage.image().required(),
    chat: Joi.boolean().required(),
    audioCall: Joi.boolean().required(),
    videoCall: Joi.boolean().required(),
    liveSession: Joi.boolean().required(),
    startDate: Joi.string().required(),
    endDate: Joi.string().required(),
  }),
};

const getOffers = {
  query: Joi.object().keys({
    user: Joi.string().custom(objectId),
    title: Joi.string(),
    subTitle: Joi.string(),
    description: Joi.string(),
    image: Joi.string(),
    chat: Joi.boolean(),
    audioCall: Joi.boolean(),
    videoCall: Joi.boolean(),
    liveSession: Joi.boolean(),
    startDate: Joi.string(),
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
      user: Joi.string().custom(objectId),
      title: Joi.string(),
      subTitle: Joi.string(),
      description: Joi.string(),
      image: Joi.any(),
      chat: Joi.boolean(),
      audioCall: Joi.boolean(),
      videoCall: Joi.boolean(),
      liveSession: Joi.boolean(),
      startDate: Joi.string(),
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
