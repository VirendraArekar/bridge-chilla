const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');
const { Role } = require('../../models');
const pick = require('../../utils/pick');
const { apiSuccess, apiError } = require('../../utils/helper');

const Collection = 'Role';

const createRole = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getRoles = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'active']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const roles = await Role.paginate(filter, options);
  if (roles) {
    apiSuccess(res, roles, 'Role retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const getRole = catchAsync(async (req, res) => {
  const role = await Role.findById(req.params.roleId);
  if (role) {
    apiSuccess(res, role, 'Role retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const updateRole = catchAsync(async (req, res) => {
  await Role.updateOne({_id : req.params.roleId}, req.body)
  .then(async(data) => {
     let role = await Role.findOne(data._id);
     apiSuccess(res, role, 'Role update successfully');
  })
  .catch((err) => {
    apiError(res, err, 'No record found');
  })
});

const deleteRole = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.cityId, res);
});

const deleteRoles = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet(Collection, req.body.ids, res);
});

module.exports = {
  createRole,
  getRoles,
  getRole,
  updateRole,
  deleteRole,
  deleteRoles,
};
