const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const serviceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['Consultant', 'Dermatologist', 'Make Up Artist', 'Mental Health Care'],
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
serviceSchema.plugin(toJSON);
serviceSchema.plugin(paginate);

/**
 * @typedef Service
 */
const Service = mongoose.model('Service', serviceSchema, 'services');

module.exports = Service;
