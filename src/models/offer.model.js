const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const offerSchema = mongoose.Schema(
  {
    user: {
      ref : "User",
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    offerImage: {
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
    startDate: {
      type: Date,
      // default: false,
      required: true,
    },
    endDate: {
      type: Date,
      // default: false,
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
