const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');
const Collection = 'Follower';

// create country
const createFollower = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getFollowers = catchAsync(async (req, res) => {
  await allRecordAndGet(Collection, req, res);
});

const getFollower = catchAsync(async (req, res) => {
  await singleRecordAndGet(Collection, req.params.cityId, res);
});

const updateFollower = catchAsync(async (req, res) => {
  await updateDocumentAndGet(Collection, req.params.cityId, req.body, res);
});

const deleteFollower = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.cityId, res);
});

const deleteFollowers = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet(Collection, req.body.ids, res);
});

module.exports = {
  createFollower,
  getFollowers,
  getFollower,
  updateFollower,
  deleteFollower,
  deleteFollowers,
};
