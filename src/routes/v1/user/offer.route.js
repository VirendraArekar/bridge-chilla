const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const OfferValidation = require('../../../validations/offer.validation');
const OfferController = require('../../../controllers/user/offer.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(OfferValidation.createOffer), OfferController.createOffer)
  .get(auth('getUsers'), validate(OfferValidation.getOffers), OfferController.getOffers);

router
  .route('/:offerId')
  .get(auth('getUsers'), validate(OfferValidation.getOffer), OfferController.getOffer)
  .patch(auth('manageUsers'), validate(OfferValidation.updateOffer), OfferController.updateOffer)
  .delete(auth('manageUsers'), validate(OfferValidation.deleteOffer), OfferController.deleteOffer);

router.route('/deleteAll').post(validate(OfferValidation.deleteOffers), OfferController.deleteOffers);

module.exports = router;
