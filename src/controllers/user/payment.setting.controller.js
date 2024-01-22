const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');
const { PaymentSetting } = require('../../models');
const { apiSuccess, apiError } = require('../../utils/helper');
const Collection = 'PaymentSetting';

// create country
const createPaymentSetting = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getPaymentSettings = catchAsync(async (req, res) => {
  await allRecordAndGet(Collection, req, res);
});

const getPaymentSetting = catchAsync(async (req, res) => {
  const role = await PaymentSetting.findById(req.params.paymentSettingId);
  if (role) {
    apiSuccess(res, role, 'Payment setting retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const updatePaymentSetting = catchAsync(async (req, res) => {
  await updateDocumentAndGet(Collection, req.params.paymentSettingId, req.body, res);
});

const deletePaymentSetting = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.paymentSettingId, res);
});

const deletePaymentSettings = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet(Collection, req.body.ids, res);
});

module.exports = {
  createPaymentSetting,
  getPaymentSettings,
  getPaymentSetting,
  updatePaymentSetting,
  deletePaymentSetting,
  deletePaymentSettings,
};
