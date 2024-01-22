const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');
const { EmailSetting } = require('../../models');
const { apiSuccess, apiError } = require('../../utils/helper');
const Collection = 'EmailSetting';

// create country
const createEmailSetting = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getEmailSettings = catchAsync(async (req, res) => {
  await allRecordAndGet(Collection, req, res);
});

const getEmailSetting = catchAsync(async (req, res) => {
  const role = await EmailSetting.findById(req.params.emailSettingId);
  if (role) {
    apiSuccess(res, role, 'Email setting retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const updateEmailSetting = catchAsync(async (req, res) => {
  await updateDocumentAndGet(Collection, req.params.emailSettingId, req.body, res);
});

const deleteEmailSetting = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.emailSettingId, res);
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
