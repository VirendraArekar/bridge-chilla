const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const liveConsultationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    customers: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' }],
    joiningTime: {
      type: Date,
      required: true,
    },
    leaveTime: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
liveConsultationSchema.plugin(toJSON);
liveConsultationSchema.plugin(paginate);

/**
 * @typedef LiveConsultation
 */
const LiveConsultation = mongoose.model('LiveConsultation', liveConsultationSchema, 'live_consultations');

module.exports = LiveConsultation;
