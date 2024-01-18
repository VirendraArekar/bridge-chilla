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
const { LiveConsultation } = require('../../models');
const { apiSuccess, apiError } = require('../../utils/helper');
const Collection = 'LiveConsultation';

// create country
const createLiveConsultation = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getLiveConsultations = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'active']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  options.populate = "user,cutomers";
  const roles = await LiveConsultation.paginate(filter, options);
  if (roles) {
    apiSuccess(res, roles, 'Live consultation retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const getLiveConsultation = catchAsync(async (req, res) => {
  const role = await LiveConsultation.findById(req.params.liveConsultationId).populate('user','customers');
  if (role) {
    apiSuccess(res, role, 'Live consultation retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const updateLiveConsultation = catchAsync(async (req, res) => {
  await LiveConsultation.updateOne({_id : req.params.liveConsultationId}, req.body)
  .then(async(data) => {
     let role = await LiveConsultation.findOne(data._id);
     apiSuccess(res, role, 'Live consultation update successfully');
  })
  .catch((err) => {
    apiError(res, err, 'No record found');
  })
});

const deleteLiveConsultation = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.liveConsultationId, res);
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
