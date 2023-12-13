const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const UserSettingValidation = require('../../../validations/user.setting.validation');
const UserSettingController = require('../../../controllers/user/user.setting.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(UserSettingValidation.createUserSetting), UserSettingController.createUserSetting)
  .get(auth('getUsers'), validate(UserSettingValidation.getUserSettings), UserSettingController.getUserSettings);

router
  .route('/:userSettingId')
  .get(auth('getUsers'), validate(UserSettingValidation.getUserSetting), UserSettingController.getUserSetting)
  .patch(auth('manageUsers'), validate(UserSettingValidation.updateUserSetting), UserSettingController.updateUserSetting)
  .delete(auth('manageUsers'), validate(UserSettingValidation.deleteUserSetting), UserSettingController.deleteUserSetting);

router
  .route('/deleteAll')
  .post(validate(UserSettingValidation.deleteUserSettings), UserSettingController.deleteUserSettings);

module.exports = router;
