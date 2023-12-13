const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const SupportValidation = require('../../../validations/support.validation');
const SupportController = require('../../../controllers/user/support.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(SupportValidation.createSupport), SupportController.createSupport)
  .get(auth('getUsers'), validate(SupportValidation.getSupports), SupportController.getSupports);

router
  .route('/:supportId')
  .get(auth('getUsers'), validate(SupportValidation.getSupport), SupportController.getSupport)
  .patch(auth('manageUsers'), validate(SupportValidation.updateSupport), SupportController.updateSupport)
  .delete(auth('manageUsers'), validate(SupportValidation.deleteSupport), SupportController.deleteSupport);

router.route('/deleteAll').post(validate(SupportValidation.deleteSupports), SupportController.deleteSupports);

module.exports = router;
