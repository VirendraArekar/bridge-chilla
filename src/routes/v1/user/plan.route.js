const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const PlanValidation = require('../../../validations/plan.validation');
const PlanController = require('../../../controllers/user/plan.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(PlanValidation.createPlan), PlanController.createPlan)
  .get(auth('getUsers'), validate(PlanValidation.getPlans), PlanController.getPlans);

router
  .route('/:planId')
  .get(auth('getUsers'), validate(PlanValidation.getPlan), PlanController.getPlan)
  .patch(auth('manageUsers'), validate(PlanValidation.updatePlan), PlanController.updatePlan)
  .delete(auth('manageUsers'), validate(PlanValidation.deletePlan), PlanController.deletePlan);

router.route('/deleteAll').post(validate(PlanValidation.deletePlans), PlanController.deletePlans);

module.exports = router;
