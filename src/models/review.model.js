const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const reviewSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    customerId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    review: {
      type: Number,
      enum: [1,2,3,4,5],
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
reviewSchema.plugin(toJSON);
reviewSchema.plugin(paginate);

/**
 * @typedef Review
 */
const Review = mongoose.model('Review', reviewSchema, 'reviews');

module.exports = Review;
