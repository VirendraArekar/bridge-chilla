const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');
const Collection = 'EmailSetting';

// create country
const createEmailSetting = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getEmailSettings = catchAsync(async (req, res) => {
  await allRecordAndGet(Collection, req, res);
});

const getEmailSetting = catchAsync(async (req, res) => {
  await singleRecordAndGet(Collection, req.params.cityId, res);
});

const updateEmailSetting = catchAsync(async (req, res) => {
  await updateDocumentAndGet(Collection, req.params.cityId, req.body, res);
});

const deleteEmailSetting = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.cityId, res);
});

const deleteEmailSettings = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet(Collection, req.body.ids, res);
});

module.exports = {
  createEmailSetting,
  getEmailSettings,
  getEmailSetting,
  updateEmailSetting,
  deleteEmailSetting,
  deleteEmailSettings,
};
