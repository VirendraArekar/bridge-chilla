const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createPage = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    stateId: Joi.string().required().custom(objectId),
  }),
};

const getPages = {
  query: Joi.object().keys({
    name: Joi.string(),
    stateId: Joi.string().custom(objectId),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getPage = {
  params: Joi.object().keys({
    pageId: Joi.string().custom(objectId),
  }),
};

const updatePage = {
  params: Joi.object().keys({
    pageId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      stateId: Joi.string().custom(objectId),
    })
    .min(1),
};

const deletePage = {
  params: Joi.object().keys({
    pageId: Joi.string().custom(objectId),
  }),
};

const deletePages = {
  params: Joi.object().keys({
    pageId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createPage,
  getPages,
  getPage,
  updatePage,
  deletePage,
  deletePages,
};
