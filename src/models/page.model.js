const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const pageSchema = mongoose.Schema(
  {
    privacy: {
      type: String,
      required: true,
    },
    term: {
      type: String,
      required: true,
    },
    license: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
pageSchema.plugin(toJSON);
pageSchema.plugin(paginate);

/**
 * @typedef Page
 */
const Page = mongoose.model('Page', pageSchema, 'pages');

module.exports = Page;
