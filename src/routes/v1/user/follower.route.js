const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const FollowerValidation = require('../../../validations/follower.validation');
const FollowerController = require('../../../controllers/user/follower.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(FollowerValidation.createFollower), FollowerController.createFollower)
  .get(auth('getUsers'), validate(FollowerValidation.getFollowers), FollowerController.getFollowers);

router
  .route('/:followerId')
  .get(auth('getUsers'), validate(FollowerValidation.getFollower), FollowerController.getFollower)
  .patch(auth('manageUsers'), validate(FollowerValidation.updateFollower), FollowerController.updateFollower)
  .delete(auth('manageUsers'), validate(FollowerValidation.deleteFollower), FollowerController.deleteFollower);

router.route('/deleteAll').post(validate(FollowerValidation.deleteFollowers), FollowerController.deleteFollowers);

module.exports = router;
