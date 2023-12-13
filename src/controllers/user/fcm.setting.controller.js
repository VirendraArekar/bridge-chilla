const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');
const Collection = 'FcmSetting';

// create country
const createFcmSetting = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getFcmSettings = catchAsync(async (req, res) => {
  await allRecordAndGet(Collection, req, res);
});

const getFcmSetting = catchAsync(async (req, res) => {
  await singleRecordAndGet(Collection, req.params.cityId, res);
});

const updateFcmSetting = catchAsync(async (req, res) => {
  await updateDocumentAndGet(Collection, req.params.cityId, req.body, res);
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
