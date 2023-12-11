const express = require('express');
const validate = require('../../../middlewares/validate');
const cityValidation = require('../../../validations/city.validation');
const cityController = require('../../../controllers/global/city.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(cityValidation.createCity), cityController.createCity)
  .get(validate(cityValidation.getCities), cityController.getCities);

router
  .route('/:cityId')
  .get(validate(cityValidation.getCity), cityController.getCity)
  .patch(validate(cityValidation.updateCity), cityController.updateCity)
  .delete(validate(cityValidation.deleteCity), cityController.deleteCity);

router.route('/deleteAll').post(validate(cityValidation.deleteCities), cityController.deleteCities);

module.exports = router;
