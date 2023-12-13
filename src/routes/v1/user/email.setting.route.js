const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const emailSettingValidation = require('../../../validations/email.setting.validation');
const emailSettingController = require('../../../controllers/user/email.setting.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(emailSettingValidation.createEmailSetting), emailSettingController.createEmailSetting)
  .get(auth('getUsers'), validate(emailSettingValidation.getEmailSettings), emailSettingController.getEmailSettings);

router
  .route('/:emailSettingId')
  .get(auth('getUsers'), validate(emailSettingValidation.getEmailSetting), emailSettingController.getEmailSetting)
  .patch(auth('manageUsers'), validate(emailSettingValidation.updateEmailSetting), emailSettingController.updateEmailSetting)
  .delete(
    auth('manageUsers'),
    validate(emailSettingValidation.deleteEmailSetting),
    emailSettingController.deleteEmailSetting
  );

router
  .route('/deleteAll')
  .post(validate(emailSettingValidation.deleteEmailSettings), emailSettingController.deleteEmailSettings);

module.exports = router;
