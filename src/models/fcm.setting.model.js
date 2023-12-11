const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const fcmSettingSchema = mongoose.Schema(
  {
    serverKey: {
      type: String,
      required: true,
    },
    clientKey: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
fcmSettingSchema.plugin(toJSON);
fcmSettingSchema.plugin(paginate);

/**
 * @typedef FcmSetting
 */
const FcmSetting = mongoose.model('FcmSetting', fcmSettingSchema, 'fsm_settings');

module.exports = FcmSetting;
