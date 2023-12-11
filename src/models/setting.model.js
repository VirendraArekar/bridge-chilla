const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const settingSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    appName: {
      type: String,
      default: 'Bride Chilla',
      required: true,
    },
    fcmSettingId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'FcmSetting',
      required: true,
    },
    emailSettingId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'EmailSetting',
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    paymentId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'PaymentSetting',
      required: true,
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
