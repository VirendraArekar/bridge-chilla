const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const stateSchema = mongoose.Schema(
  {
    countryId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Country',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    stateCode: {
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
stateSchema.plugin(toJSON);
stateSchema.plugin(paginate);

/**
 * @typedef State
 */
const State = mongoose.model('State', stateSchema, 'states');

module.exports = State;
