const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const followingSchema = mongoose.Schema(
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
followingSchema.plugin(toJSON);
followingSchema.plugin(paginate);

/**
 * @typedef Following
 */
const Following = mongoose.model('Following', followingSchema, 'followings');

module.exports = Following;
