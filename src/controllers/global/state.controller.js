const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');

// create country
const createState = catchAsync(async (req, res) => {
  await createRecordAndGet('State', req.body, res);
});

const getStates = catchAsync(async (req, res) => {
  await allRecordAndGet('State', req, res);
});

const getState = catchAsync(async (req, res) => {
  await singleRecordAndGet('State', req.params.stateId, res);
});

const updateState = catchAsync(async (req, res) => {
  await updateDocumentAndGet('State', req.params.stateId, req.body, res);
});

const deleteState = catchAsync(async (req, res) => {
  await deleteDocumentAndGet('State', req.params.stateId, res);
});

const deleteStates = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet('State', req.body.ids, res);
});

module.exports = {
  createState,
  getStates,
  getState,
  updateState,
  deleteState,
  deleteStates,
};
