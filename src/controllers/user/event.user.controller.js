const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');
const Collection = 'EventUser';

// create country
const createEventUser = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getEventUsers = catchAsync(async (req, res) => {
  await allRecordAndGet(Collection, req, res);
});

const getEventUser = catchAsync(async (req, res) => {
  await singleRecordAndGet(Collection, req.params.cityId, res);
});

const updateEventUser = catchAsync(async (req, res) => {
  await updateDocumentAndGet(Collection, req.params.cityId, req.body, res);
});

const deleteEventUser = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.cityId, res);
});

const deleteEventUsers = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet(Collection, req.body.ids, res);
});

module.exports = {
  createEventUser,
  getEventUsers,
  getEventUser,
  updateEventUser,
  deleteEventUser,
  deleteEventUsers,
};
