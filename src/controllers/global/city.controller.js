const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');
const Collection = 'City';

// create country
const createCity = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getCities = catchAsync(async (req, res) => {
  await allRecordAndGet(Collection, req, res);
});

const getCity = catchAsync(async (req, res) => {
  await singleRecordAndGet(Collection, req.params.cityId, res);
});

const updateCity = catchAsync(async (req, res) => {
  await updateDocumentAndGet(Collection, req.params.cityId, req.body, res);
});

const deleteCity = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.cityId, res);
});

const deleteCities = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet(Collection, req.body.ids, res);
});

module.exports = {
  createCity,
  getCities,
  getCity,
  updateCity,
  deleteCity,
  deleteCities,
};
