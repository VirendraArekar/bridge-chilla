const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const citySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    stateId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'State',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
citySchema.plugin(toJSON);
citySchema.plugin(paginate);

/**
 * @typedef City
 */
const City = mongoose.model('City', citySchema, 'cities');

module.exports = City;
