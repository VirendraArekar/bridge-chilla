const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const notificationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    notification: {
      type: String,
      required: true,
    },
    priority: {
      type: Number,
      required: true,
    },
    readIt: {
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
notificationSchema.plugin(toJSON);
notificationSchema.plugin(paginate);

/**
 * @typedef Notification
 */
const Notification = mongoose.model('Notification', notificationSchema, 'notifications');

module.exports = Notification;
