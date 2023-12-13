const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');
const Collection = 'UserSetting';

// create country
const createUserSetting = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getUserSettings = catchAsync(async (req, res) => {
  await allRecordAndGet(Collection, req, res);
});

const getUserSetting = catchAsync(async (req, res) => {
  await singleRecordAndGet(Collection, req.params.cityId, res);
});

const updateUserSetting = catchAsync(async (req, res) => {
  await updateDocumentAndGet(Collection, req.params.cityId, req.body, res);
});

const deleteUserSetting = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.cityId, res);
});

const deleteUserSettings = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet(Collection, req.body.ids, res);
});

module.exports = {
  createUserSetting,
  getUserSettings,
  getUserSetting,
  updateUserSetting,
  deleteUserSetting,
  deleteUserSettings,
};
