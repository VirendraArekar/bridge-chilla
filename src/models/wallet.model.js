const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const walletSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    bslanceAmount: {
      type: Boolean,
      default: false,
      required: true,
    },
    previousAmount: {
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
walletSchema.plugin(toJSON);
walletSchema.plugin(paginate);

/**
 * @typedef Wallet
 */
const Wallet = mongoose.model('Wallet', walletSchema, 'wallets');

module.exports = Wallet;
