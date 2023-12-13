const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const ServiceValidation = require('../../../validations/service.validation');
const ServiceController = require('../../../controllers/user/service.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(ServiceValidation.createService), ServiceController.createService)
  .get(auth('getUsers'), validate(ServiceValidation.getServices), ServiceController.getServices);

router
  .route('/:serviceId')
  .get(auth('getUsers'), validate(ServiceValidation.getService), ServiceController.getService)
  .patch(auth('manageUsers'), validate(ServiceValidation.updateService), ServiceController.updateService)
  .delete(auth('manageUsers'), validate(ServiceValidation.deleteService), ServiceController.deleteService);

router.route('/deleteAll').post(validate(ServiceValidation.deleteServices), ServiceController.deleteServices);

module.exports = router;
