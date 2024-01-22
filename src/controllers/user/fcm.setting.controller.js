const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');
const { FcmSetting } = require('../../models');
const { apiSuccess, apiError } = require('../../utils/helper');
const Collection = 'FcmSetting';

// create country
const createFcmSetting = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getFcmSettings = catchAsync(async (req, res) => {
  await allRecordAndGet(Collection, req, res);
});

const getFcmSetting = catchAsync(async (req, res) => {
  const role = await FcmSetting.findById(req.params.fcmSettingId);
  if (role) {
    apiSuccess(res, role, 'Offer retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const updateFcmSetting = catchAsync(async (req, res) => {
  await updateDocumentAndGet(Collection, req.params.fcmSettingId, req.body, res);
});

const deleteFcmSetting = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.cityId, res);
});

const deleteFcmSettings = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet(Collection, req.body.ids, res);
});

module.exports = {
  createFcmSetting,
  getFcmSettings,
  getFcmSetting,
  updateFcmSetting,
  deleteFcmSetting,
  deleteFcmSettings,
};
