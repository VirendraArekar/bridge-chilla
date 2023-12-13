const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const PageValidation = require('../../../validations/page.validation');
const PageController = require('../../../controllers/user/page.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(PageValidation.createPage), PageController.createPage)
  .get(auth('getUsers'), validate(PageValidation.getPages), PageController.getPages);

router
  .route('/:pageId')
  .get(auth('getUsers'), validate(PageValidation.getPage), PageController.getPage)
  .patch(auth('manageUsers'), validate(PageValidation.updatePage), PageController.updatePage)
  .delete(auth('manageUsers'), validate(PageValidation.deletePage), PageController.deletePage);

router.route('/deleteAll').post(validate(PageValidation.deletePages), PageController.deletePages);

module.exports = router;
