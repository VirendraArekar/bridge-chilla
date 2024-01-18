const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const eventSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    eventDateTime: {
      type: Date,
      required: true,
    },
    eventStartTime: {
      type: Date,
      default: null,
      required: true,
    },
    eventEndTime: {
      type: Date,
      default: null,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
eventSchema.plugin(toJSON);
eventSchema.plugin(paginate);

/**
 * @typedef Event
 */
const Event = mongoose.model('Event', eventSchema, 'events');

module.exports = Event;
