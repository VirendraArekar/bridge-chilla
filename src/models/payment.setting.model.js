const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const paymentSettingSchema = mongoose.Schema(
  {
    clientKey: {
      type: String,
      required: true,
    },
    clientSecret: {
      type: String,
      required: true,
    },
    vendorEmail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
paymentSettingSchema.plugin(toJSON);
paymentSettingSchema.plugin(paginate);

/**
 * @typedef PaymentSetting
 */
const PaymentSetting = mongoose.model('PaymentSetting', paymentSettingSchema, 'payment_settings');

module.exports = PaymentSetting;
