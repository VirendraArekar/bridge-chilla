const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');
const Collection = 'LiveConsultation';

// create country
const createLiveConsultation = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getLiveConsultations = catchAsync(async (req, res) => {
  await allRecordAndGet(Collection, req, res);
});

const getLiveConsultation = catchAsync(async (req, res) => {
  await singleRecordAndGet(Collection, req.params.cityId, res);
});

const updateLiveConsultation = catchAsync(async (req, res) => {
  await updateDocumentAndGet(Collection, req.params.cityId, req.body, res);
});

const deleteLiveConsultation = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.cityId, res);
});

const deleteLiveConsultations = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet(Collection, req.body.ids, res);
});

module.exports = {
  createLiveConsultation,
  getLiveConsultations,
  getLiveConsultation,
  updateLiveConsultation,
  deleteLiveConsultation,
  deleteLiveConsultations,
};
