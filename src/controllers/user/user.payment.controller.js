const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');
const Collection = 'UserPayment';

// create country
const createUserPayment = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getUserPayments = catchAsync(async (req, res) => {
  await allRecordAndGet(Collection, req, res);
});

const getUserPayment = catchAsync(async (req, res) => {
  await singleRecordAndGet(Collection, req.params.cityId, res);
});

const updateUserPayment = catchAsync(async (req, res) => {
  await updateDocumentAndGet(Collection, req.params.cityId, req.body, res);
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
