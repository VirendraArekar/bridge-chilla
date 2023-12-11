const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const eventUserSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    joiningTime: {
      type: String,
      required: true,
    },
    leaveTime: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
eventUserSchema.plugin(toJSON);
eventUserSchema.plugin(paginate);

/**
 * @typedef EventUser
 */
const EventUser = mongoose.model('EventUser', eventUserSchema, 'event_users');

module.exports = EventUser;
