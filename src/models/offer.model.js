const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const offerSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    chat: {
      type: Boolean,
      default: false,
      required: true,
    },
    audioCall: {
      type: Boolean,
      default: false,
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
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
offerSchema.plugin(toJSON);
offerSchema.plugin(paginate);

/**
 * @typedef Offer
 */
const Offer = mongoose.model('Offer', offerSchema, 'offers');

module.exports = Offer;
