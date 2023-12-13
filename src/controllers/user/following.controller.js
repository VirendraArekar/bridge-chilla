const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');
const Collection = 'Following';

// create country
const createFollowing = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getFollowings = catchAsync(async (req, res) => {
  await allRecordAndGet(Collection, req, res);
});

const getFollowing = catchAsync(async (req, res) => {
  await singleRecordAndGet(Collection, req.params.cityId, res);
});

const updateFollowing = catchAsync(async (req, res) => {
  await updateDocumentAndGet(Collection, req.params.cityId, req.body, res);
});

const deleteFollowing = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.cityId, res);
});

const deleteFollowings = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet(Collection, req.body.ids, res);
});

module.exports = {
  createFollowing,
  getFollowings,
  getFollowing,
  updateFollowing,
  deleteFollowing,
  deleteFollowings,
};
