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
const { Transaction } = require('../../models');
const { apiSuccess, apiError } = require('../../utils/helper');
const Collection = 'Transaction';

// create country
const createTransaction = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getTransactions = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'active']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  options.populate = "user";
  const roles = await Transaction.paginate(filter, options);
  if (roles) {
    apiSuccess(res, roles, 'Transaction retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const getTransaction = catchAsync(async (req, res) => {
  const role = await Transaction.findById(req.params.transactionId);
  if (role) {
    apiSuccess(res, role, 'Transaction retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const updateTransaction = catchAsync(async (req, res) => {
  await Transaction.updateOne({_id : req.params.transactionId}, req.body)
  .then(async(data) => {
     let role = await Transaction.findOne(data._id);
     apiSuccess(res, role, 'Transaction update successfully');
  })
  .catch((err) => {
    apiError(res, err, 'No record found');
  })
});

const deleteTransaction = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.cityId, res);
});

const deleteTransactions = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet(Collection, req.body.ids, res);
});

module.exports = {
  createTransaction,
  getTransactions,
  getTransaction,
  updateTransaction,
  deleteTransaction,
  deleteTransactions,
};
