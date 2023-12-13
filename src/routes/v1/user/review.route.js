const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const ReviewValidation = require('../../../validations/review.validation');
const ReviewController = require('../../../controllers/user/review.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(ReviewValidation.createReview), ReviewController.createReview)
  .get(auth('getUsers'), validate(ReviewValidation.getReviews), ReviewController.getReviews);

router
  .route('/:reviewId')
  .get(auth('getUsers'), validate(ReviewValidation.getReview), ReviewController.getReview)
  .patch(auth('manageUsers'), validate(ReviewValidation.updateReview), ReviewController.updateReview)
  .delete(auth('manageUsers'), validate(ReviewValidation.deleteReview), ReviewController.deleteReview);

router.route('/deleteAll').post(validate(ReviewValidation.deleteReviews), ReviewController.deleteReviews);

module.exports = router;
