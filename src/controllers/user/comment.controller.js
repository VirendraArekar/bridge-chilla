const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');
const Collection = 'Comment';

// create country
const createComment = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getComments = catchAsync(async (req, res) => {
  await allRecordAndGet(Collection, req, res);
});

const getComment = catchAsync(async (req, res) => {
  await singleRecordAndGet(Collection, req.params.cityId, res);
});

const updateComment = catchAsync(async (req, res) => {
  await updateDocumentAndGet(Collection, req.params.cityId, req.body, res);
});

const deleteComment = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.cityId, res);
});

const deleteComments = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet(Collection, req.body.ids, res);
});

module.exports = {
  createComment,
  getComments,
  getComment,
  updateComment,
  deleteComment,
  deleteComments,
};
