const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const errorLogSchema = mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
    },
    // userId: {
    //   type: mongoose.SchemaTypes.ObjectId,
    //   ref: 'User',
    //   required: true,
    // },
    request: {
      type: Object,
      required: true,
    },
    error: {
      type: Object,
      required: true,
    },
    priority: {
      type: String,
      enum: ['High', 'Medium', 'Low'],
      default: 'Low',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
errorLogSchema.plugin(toJSON);
errorLogSchema.plugin(paginate);

/**
 * @typedef ErrorLog
 */
const ErrorLog = mongoose.model('ErrorLog', errorLogSchema, 'error_logs');

module.exports = ErrorLog;
