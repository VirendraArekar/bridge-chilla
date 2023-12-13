const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const commentValidation = require('../../../validations/comment.validation');
const commentController = require('../../../controllers/user/comment.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(commentValidation.createComment), commentController.createComment)
  .get(auth('getUsers'), validate(commentValidation.getComments), commentController.getComments);

router
  .route('/:commentId')
  .get(auth('getUsers'), validate(commentValidation.getComment), commentController.getComment)
  .patch(auth('manageUsers'), validate(commentValidation.updateComment), commentController.updateComment)
  .delete(auth('manageUsers'), validate(commentValidation.deleteComment), commentController.deleteComment);

router.route('/deleteAll').post(validate(commentValidation.deleteComments), commentController.deleteComments);

module.exports = router;
