const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const SettingValidation = require('../../../validations/setting.validation');
const SettingController = require('../../../controllers/user/setting.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(SettingValidation.createSetting), SettingController.createSetting)
  .get(auth('getUsers'), validate(SettingValidation.getSettings), SettingController.getSettings);

router
  .route('/:settingId')
  .get(auth('getUsers'), validate(SettingValidation.getSetting), SettingController.getSetting)
  .patch(auth('manageUsers'), validate(SettingValidation.updateSetting), SettingController.updateSetting)
  .delete(auth('manageUsers'), validate(SettingValidation.deleteSetting), SettingController.deleteSetting);

router.route('/deleteAll').post(validate(SettingValidation.deleteSettings), SettingController.deleteSettings);

module.exports = router;
