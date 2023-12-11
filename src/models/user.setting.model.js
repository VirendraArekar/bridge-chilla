const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const userSettingSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    call: {
      type: Boolean,
      default: false,
      required: true,
    },
    chat: {
      type: Boolean,
      default: false,
      required: true,
    },
    live: {
      type: Boolean,
      default: false,
      required: true,
    },
    currency: {
      type: String,
      default: null,
      required: true,
    },
    blockList: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'userId' }],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
userSettingSchema.plugin(toJSON);
userSettingSchema.plugin(paginate);

/**
 * @typedef userSettingSchema
 */
const UserSetting = mongoose.model('UserSetting', userSettingSchema, 'user_settings');

module.exports = UserSetting;
