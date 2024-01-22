const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');
const pick = require('../../utils/pick');
const { Page } = require('../../models');
const { apiSuccess, apiError } = require('../../utils/helper');
const Collection = 'Page';

// create country
const createPage = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getPages = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'active']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const roles = await Page.paginate(filter, options);
  if (roles) {
    apiSuccess(res, roles, 'Page retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const getPage = catchAsync(async (req, res) => {
  const role = await Page.findById(req.params.pageId);
  if (role) {
    apiSuccess(res, role, 'Page retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const updatePage = catchAsync(async (req, res) => {
  await Page.updateOne({_id : req.params.pageId}, req.body)
  .then(async(data) => {
     let role = await Page.findOne(data._id);
     apiSuccess(res, role, 'Offer update successfully');
  })
  .catch((err) => {
    apiError(res, err, 'No record found');
  })
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
