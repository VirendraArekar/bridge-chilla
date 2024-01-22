const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { tokenTypes } = require('../config/tokens');

const planSchema = mongoose.Schema(
  {
    plan: {
      type: String,
      required: true,
    },
    chat: {
      type: Boolean,
      default : false,
      required: true,
    },
    audioCall: {
      type: Boolean,
      default : false,
      required: true,
    },
    videoCall: {
      type: Boolean,
      default: false,
      required: true,
    },
    liveSession: {
      type: Boolean,
      default: false,
      required: true,
    },
    type: {
      type: String,
      enum: ['Monthly', 'Annually', 'Quarterly','Half Year'],
      required: true,
    },
    banner:{
      type: String,
      default: '',
      required: true,
    },
    description: {
      type: String,
      default: '',
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
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
