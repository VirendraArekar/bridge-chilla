const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const PaymentSettingValidation = require('../../../validations/payment.setting.validation');
const PaymentSettingController = require('../../../controllers/user/payment.setting.controller');

const router = express.Router();

router
  .route('/')
  .post(
    auth('manageUsers'),
    validate(PaymentSettingValidation.createPaymentSetting),
    PaymentSettingController.createPaymentSetting
  )
  .get(auth('getUsers'), validate(PaymentSettingValidation.getPaymentSettings), PaymentSettingController.getPaymentSettings);

router
  .route('/:paymentSettingId')
  .get(auth('getUsers'), validate(PaymentSettingValidation.getPaymentSetting), PaymentSettingController.getPaymentSetting)
  .patch(
    auth('manageUsers'),
    validate(PaymentSettingValidation.updatePaymentSetting),
    PaymentSettingController.updatePaymentSetting
  )
  .delete(
    auth('manageUsers'),
    validate(PaymentSettingValidation.deletePaymentSetting),
    PaymentSettingController.deletePaymentSetting
  );

router
  .route('/deleteAll')
  .post(validate(PaymentSettingValidation.deletePaymentSettings), PaymentSettingController.deletePaymentSettings);

module.exports = router;
