const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const FollowingValidation = require('../../../validations/following.validation');
const FollowingController = require('../../../controllers/user/following.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(FollowingValidation.createFollowing), FollowingController.createFollowing)
  .get(auth('getUsers'), validate(FollowingValidation.getFollowings), FollowingController.getFollowings);

router
  .route('/:followingId')
  .get(auth('getUsers'), validate(FollowingValidation.getFollowing), FollowingController.getFollowing)
  .patch(auth('manageUsers'), validate(FollowingValidation.updateFollowing), FollowingController.updateFollowing)
  .delete(auth('manageUsers'), validate(FollowingValidation.deleteFollowing), FollowingController.deleteFollowing);

router.route('/deleteAll').post(validate(FollowingValidation.deleteFollowings), FollowingController.deleteFollowings);

module.exports = router;
