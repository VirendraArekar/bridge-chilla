const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const RoleValidation = require('../../../validations/role.validation');
const RoleController = require('../../../controllers/user/role.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(RoleValidation.createRole), RoleController.createRole)
  .get(auth('getUsers'), validate(RoleValidation.getRoles), RoleController.getRoles);

router
  .route('/:roleId')
  .get(auth('getUsers'), validate(RoleValidation.getRole), RoleController.getRole)
  .patch(auth('manageUsers'), validate(RoleValidation.updateRole), RoleController.updateRole)
  .delete(auth('manageUsers'), validate(RoleValidation.deleteRole), RoleController.deleteRole);

router.route('/deleteAll').post(validate(RoleValidation.deleteRoles), RoleController.deleteRoles);

module.exports = router;
