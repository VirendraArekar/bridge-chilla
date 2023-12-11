const express = require('express');
const validate = require('../../../middlewares/validate');
const stateValidation = require('../../../validations/state.validation');
const stateController = require('../../../controllers/global/state.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(stateValidation.createState), stateController.createState)
  .get(validate(stateValidation.getStates), stateController.getStates);

router
  .route('/:stateId')
  .get(validate(stateValidation.getState), stateController.getState)
  .patch(validate(stateValidation.updateState), stateController.updateState)
  .delete(validate(stateValidation.deleteState), stateController.deleteState);

router.route('/deleteAll').post(validate(stateValidation.deleteStates), stateController.deleteStates);

module.exports = router;
