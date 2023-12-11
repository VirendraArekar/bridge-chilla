const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const followerSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    followerId: {
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
followerSchema.plugin(toJSON);
followerSchema.plugin(paginate);

/**
 * @typedef Follower
 */
const Follower = mongoose.model('Follower', followerSchema, 'followers');

module.exports = Follower;
