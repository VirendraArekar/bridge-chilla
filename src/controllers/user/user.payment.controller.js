const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');
const pick = require('../../utils/pick');
const { apiSuccess, apiError } = require('../../utils/helper');
const { UserPayment } = require('../../models');
const Collection = 'UserPayment';

// create country
const createUserPayment = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getUserPayments = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'active']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  options.populate = "user";
  const roles = await UserPayment.paginate(filter, options);
  if (roles) {
    apiSuccess(res, roles, 'User payment retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const getUserPayment = catchAsync(async (req, res) => {
  const role = await UserPayment.findById(req.params.userPaymentId).populate('user');
  if (role) {
    apiSuccess(res, role, 'User payment retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const updateUserPayment = catchAsync(async (req, res) => {
  await UserPayment.updateOne({_id : req.params.userPaymentId}, req.body)
  .then(async(data) => {
     let role = await UserPayment.findOne(data._id);
     apiSuccess(res, role, 'User payment update successfully');
  })
  .catch((err) => {
    apiError(res, err, 'No record found');
  })
});

const deleteUserPayment = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.cityId, res);
});

const deleteUserPayments = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet(Collection, req.body.ids, res);
});

module.exports = {
  createUserPayment,
  getUserPayments,
  getUserPayment,
  updateUserPayment,
  deleteUserPayment,
  deleteUserPayments,
};
