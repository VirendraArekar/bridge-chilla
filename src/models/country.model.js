const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const countrySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    countryCode: {
      type: String,
      required: true,
    },
    phoneCode: {
      type: String,
      default: '',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
countrySchema.plugin(toJSON);
countrySchema.plugin(paginate);

/**
 * @typedef Country
 */
const Country = mongoose.model('Country', countrySchema, 'countries');

module.exports = Country;
