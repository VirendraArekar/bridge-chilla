const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const settingSchema = mongoose.Schema(
  {
    appName: {
      type: String,
      default: 'Bride Chilla',
      required: true,
    },
    fcmSettingId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'FcmSetting',
      required: false,
    },
    emailSettingId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'EmailSetting',
      required: false,
    },
    currency: {
      type: String,
      required: false,
    },
    paymentId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'PaymentSetting',
      required: false,
    },
    appLogo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
settingSchema.plugin(toJSON);
settingSchema.plugin(paginate);

/**
 * @typedef Setting
 */
const Setting = mongoose.model('Setting', settingSchema, 'settings');

module.exports = Setting;
