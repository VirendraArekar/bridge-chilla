const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const FcmSettingValidation = require('../../../validations/fcm.setting.validation');
const FcmSettingController = require('../../../controllers/user/fcm.setting.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(FcmSettingValidation.createFcmSetting), FcmSettingController.createFcmSetting)
  .get(auth('getUsers'), validate(FcmSettingValidation.getFcmSettings), FcmSettingController.getFcmSettings);

router
  .route('/:fcmSettingId')
  .get(auth('getUsers'), validate(FcmSettingValidation.getFcmSetting), FcmSettingController.getFcmSetting)
  .patch(auth('manageUsers'), validate(FcmSettingValidation.updateFcmSetting), FcmSettingController.updateFcmSetting)
  .delete(auth('manageUsers'), validate(FcmSettingValidation.deleteFcmSetting), FcmSettingController.deleteFcmSetting);

router.route('/deleteAll').post(validate(FcmSettingValidation.deleteFcmSettings), FcmSettingController.deleteFcmSettings);

module.exports = router;
