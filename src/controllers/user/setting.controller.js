const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');
const Collection = 'Setting';

// create country
const createSetting = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getSettings = catchAsync(async (req, res) => {
  await allRecordAndGet(Collection, req, res);
});

const getSetting = catchAsync(async (req, res) => {
  await singleRecordAndGet(Collection, req.params.cityId, res);
});

const updateSetting = catchAsync(async (req, res) => {
  await updateDocumentAndGet(Collection, req.params.cityId, req.body, res);
});

const deleteSetting = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.cityId, res);
});

const deleteSettings = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet(Collection, req.body.ids, res);
});

module.exports = {
  createSetting,
  getSettings,
  getSetting,
  updateSetting,
  deleteSetting,
  deleteSettings,
};
