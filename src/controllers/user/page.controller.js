const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');
const Collection = 'Page';

// create country
const createPage = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getPages = catchAsync(async (req, res) => {
  await allRecordAndGet(Collection, req, res);
});

const getPage = catchAsync(async (req, res) => {
  await singleRecordAndGet(Collection, req.params.cityId, res);
});

const updatePage = catchAsync(async (req, res) => {
  await updateDocumentAndGet(Collection, req.params.cityId, req.body, res);
});

const deletePage = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.cityId, res);
});

const deletePages = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet(Collection, req.body.ids, res);
});

module.exports = {
  createPage,
  getPages,
  getPage,
  updatePage,
  deletePage,
  deletePages,
};
