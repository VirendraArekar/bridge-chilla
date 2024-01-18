const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const userPaymentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    // eventType: {
    //   type: String,
    //   enum: ['Event', 'Live', 'Call', 'Plan', 'Subscription'],
    //   required: true,
    // },
    transactionType: {
      type: String,
      enum: ['Wallet', 'Upi', 'Credit Card', 'Debit Card', 'Offline'],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
userPaymentSchema.plugin(toJSON);
userPaymentSchema.plugin(paginate);

/**
 * @typedef UserPayment
 */
const UserPayment = mongoose.model('UserPayment', userPaymentSchema, 'user_payments');

module.exports = UserPayment;
