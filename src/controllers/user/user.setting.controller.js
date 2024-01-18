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
const { UserSetting } = require('../../models');
const pick = require('../../utils/pick');
const { apiSuccess, apiError } = require('../../utils/helper');

// create country
const createUserSetting = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getUserSettings = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'active']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  options.populate = "user";
  const roles = await UserSetting.paginate(filter, options);
  if (roles) {
    apiSuccess(res, roles, 'User setting retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const getUserSetting = catchAsync(async (req, res) => {
  const role = await UserSetting.findById(req.params.userSettingId);
  if (role) {
    apiSuccess(res, role, 'User setting retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const updateUserSetting = catchAsync(async (req, res) => {
  await UserSetting.updateOne({_id : req.params.userSettingId}, req.body)
  .then(async(data) => {
     let role = await UserSetting.findOne(data._id);
     apiSuccess(res, role, 'User setting update successfully');
  })
  .catch((err) => {
    apiError(res, err, 'No record found');
  })
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
