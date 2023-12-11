const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const emailSettingSchema = mongoose.Schema(
  {
    smtpHost: {
      type: String,
      required: true,
    },
    smtpPort: {
      type: String,
      enum: [2525, 465, 586],
      required: true,
    },
    smtpUsername: {
      type: String,
      required: true,
    },
    smtpPassword: {
      type: String,
      required: true,
    },
    emailFrom: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
emailSettingSchema.plugin(toJSON);
emailSettingSchema.plugin(paginate);

/**
 * @typedef EmailSetting
 */
const EmailSetting = mongoose.model('EmailSetting', emailSettingSchema, 'email_settings');

module.exports = EmailSetting;
