const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const supportSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
supportSchema.plugin(toJSON);
supportSchema.plugin(paginate);

/**
 * @typedef Support
 */
const Support = mongoose.model('Support', supportSchema, 'supports');

module.exports = Support;
