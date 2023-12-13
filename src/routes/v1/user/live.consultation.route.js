const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const LiveConsultationValidation = require('../../../validations/live.consultation.validation');
const LiveConsultationController = require('../../../controllers/user/live.consultation.controller');

const router = express.Router();

router
  .route('/')
  .post(
    auth('manageUsers'),
    validate(LiveConsultationValidation.createLiveConsultation),
    LiveConsultationController.createLiveConsultation
  )
  .get(
    auth('getUsers'),
    validate(LiveConsultationValidation.getLiveConsultations),
    LiveConsultationController.getLiveConsultations
  );

router
  .route('/:liveConsultationId')
  .get(
    auth('getUsers'),
    validate(LiveConsultationValidation.getLiveConsultation),
    LiveConsultationController.getLiveConsultation
  )
  .patch(
    auth('manageUsers'),
    validate(LiveConsultationValidation.updateLiveConsultation),
    LiveConsultationController.updateLiveConsultation
  )
  .delete(
    auth('manageUsers'),
    validate(LiveConsultationValidation.deleteLiveConsultation),
    LiveConsultationController.deleteLiveConsultation
  );

router
  .route('/deleteAll')
  .post(validate(LiveConsultationValidation.deleteLiveConsultations), LiveConsultationController.deleteLiveConsultations);

module.exports = router;
