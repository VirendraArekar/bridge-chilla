const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');
const Collection = 'Support';

// create country
const createSupport = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getSupports = catchAsync(async (req, res) => {
  await allRecordAndGet(Collection, req, res);
});

const getSupport = catchAsync(async (req, res) => {
  await singleRecordAndGet(Collection, req.params.cityId, res);
});

const updateSupport = catchAsync(async (req, res) => {
  await updateDocumentAndGet(Collection, req.params.cityId, req.body, res);
});

const deleteSupport = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.cityId, res);
});

const deleteSupports = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet(Collection, req.body.ids, res);
});

module.exports = {
  createSupport,
  getSupports,
  getSupport,
  updateSupport,
  deleteSupport,
  deleteSupports,
};
