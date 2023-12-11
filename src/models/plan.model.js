const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { tokenTypes } = require('../config/tokens');

const planSchema = mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
      index: true,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    type: {
      type: String,
      enum: [tokenTypes.REFRESH, tokenTypes.RESET_PASSWORD, tokenTypes.VERIFY_EMAIL],
      required: true,
    },
    expires: {
      type: Date,
      required: true,
    },
    blacklisted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
planSchema.plugin(toJSON);
planSchema.plugin(paginate);

/**
 * @typedef Plan
 */
const Plan = mongoose.model('Plan', planSchema, 'plans');

module.exports = Plan;
