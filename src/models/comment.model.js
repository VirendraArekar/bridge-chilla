const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const commentSchema = mongoose.Schema(
  {
    eventId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Event',
      default: null,
      required: true,
    },
    liveId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Event',
      default: null,
      required: true,
    },
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    hierarchy: {
      type: Number,
      enum : [1,2,3,4,5],
      default: 1,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
commentSchema.plugin(toJSON);
commentSchema.plugin(paginate);

/**
 * @typedef Comment
 */
const Comment = mongoose.model('Comment', commentSchema, 'comments');

module.exports = Comment;
