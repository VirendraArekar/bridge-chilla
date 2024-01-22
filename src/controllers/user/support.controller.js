const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');
const Support = require('../../models/support.model');
const pick = require('../../utils/pick');
const { apiSuccess, apiError } = require('../../utils/helper');
const Collection = 'Support';

// create country
const createSupport = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getSupports = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'active']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const roles = await Support.paginate(filter, options);
  if (roles) {
    apiSuccess(res, roles, 'Support retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const getSupport = catchAsync(async (req, res) => {
  const role = await Support.findById(req.params.supportId);
  if (role) {
    apiSuccess(res, role, 'Support retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const updateSupport = catchAsync(async (req, res) => {
  await Support.updateOne({_id : req.params.supportId}, req.body)
  .then(async(data) => {
     let role = await Support.findOne(data._id);
     apiSuccess(res, role, 'Support update successfully');
  })
  .catch((err) => {
    apiError(res, err, 'No record found');
  })
});

const deleteSupport = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.cityId, res);
});

const deleteSupports = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet(Collection, req.body.ids, res);
});

module.exports = {
  createSupport,
  getSupports,
  getSupport,
  updateSupport,
  deleteSupport,
  deleteSupports,
};
