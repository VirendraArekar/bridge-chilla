const express = require('express');
const validate = require('../../../middlewares/validate');
const countryValidation = require('../../../validations/country.validation');
const countryController = require('../../../controllers/global/country.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(countryValidation.createUser), countryController.createCountry)
  .get(validate(countryValidation.getUsers), countryController.getCountries);

router
  .route('/:countryId')
  .get(validate(countryValidation.getUser), countryController.getCountry)
  .patch(validate(countryValidation.updateUser), countryController.updateCountry)
  .delete(validate(countryValidation.deleteUser), countryController.deleteCountry);

router.route('/deleteAll').post(validate(countryValidation.deleteUser), countryController.deleteCountries);

module.exports = router;
