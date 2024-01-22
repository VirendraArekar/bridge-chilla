const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');
const { storage } = require('../../utils/upload');
const pick = require('../../utils/pick');
const { Plan } = require('../../models');
const { apiSuccess, apiError, getDomainAddress } = require('../../utils/helper');
const Collection = 'Plan';
const multer = require('multer');

// create country
const createPlan = catchAsync(async (req, res) => {
  let upload = multer({ storage: storage}).single('image');
  let body = req.body;
  await upload(req, res, async function(err) {
    if(req.file){
      if (req.fileValidationError) {
        return apiResponse.validationErrorWithData(res, "Validation Error.", req.fileValidationError)
      }
      // else if (!req.file) {
      //   return res.status(400).send({status : 0, message: "Please select an image to upload" , data : null});
      // }
      else if (err instanceof multer.MulterError) {
        return res.status(500).send({status : 0,  message: `Could not upload the file: ${req.file.originalname}. ${err}` , data : null});
      }
      // else if (err) {
      //   return apiResponse.ErrorResponse(res, err);
      // }
      body.banner = getDomainAddress(req) + `/uploads/` + req.file.filename;
      await createRecordAndGet(Collection, body, res);
    }
    else{
      await createRecordAndGet(Collection, body, res);
    }
  })
});

const getPlans = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'active']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  options.populate = "user";
  const roles = await Plan.paginate(filter, options);
  if (roles) {
    apiSuccess(res, roles, 'Plan retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const getPlan = catchAsync(async (req, res) => {
  const role = await Plan.findById(req.params.planId);
  if (role) {
    apiSuccess(res, role, 'Plan  retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const updatePlan = catchAsync(async (req, res) => {
  await Plan.updateOne({_id : req.params.planId}, req.body)
  .then(async(data) => {
     let role = await Plan.findOne(data._id);
     apiSuccess(res, role, 'Plan update successfully');
  })
  .catch((err) => {
    apiError(res, err, 'No record found');
  })
});

const deletePlan = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.cityId, res);
});

const deletePlans = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet(Collection, req.body.ids, res);
});

module.exports = {
  createPlan,
  getPlans,
  getPlan,
  updatePlan,
  deletePlan,
  deletePlans,
};
