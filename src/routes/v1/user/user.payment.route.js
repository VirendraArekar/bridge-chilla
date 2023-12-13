const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const UserPaymentValidation = require('../../../validations/user.payment.validation');
const UserPaymentController = require('../../../controllers/user/user.payment.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(UserPaymentValidation.createUserPayment), UserPaymentController.createUserPayment)
  .get(auth('getUsers'), validate(UserPaymentValidation.getUserPayments), UserPaymentController.getUserPayments);

router
  .route('/:userPaymentId')
  .get(auth('getUsers'), validate(UserPaymentValidation.getUserPayment), UserPaymentController.getUserPayment)
  .patch(auth('manageUsers'), validate(UserPaymentValidation.updateUserPayment), UserPaymentController.updateUserPayment)
  .delete(auth('manageUsers'), validate(UserPaymentValidation.deleteUserPayment), UserPaymentController.deleteUserPayment);

router
  .route('/deleteAll')
  .post(validate(UserPaymentValidation.deleteUserPayments), UserPaymentController.deleteUserPayments);

module.exports = router;
