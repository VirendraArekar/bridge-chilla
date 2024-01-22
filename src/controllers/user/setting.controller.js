const catchAsync = require('../../utils/catchAsync');
const {
  updateDocumentAndGet,
  createRecordAndGet,
  allRecordAndGet,
  singleRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
} = require('../../services/db.service');
const Collection = 'Setting';
const multer = require('multer');
const { storage } = require('../../utils/upload');
const pick = require('../../utils/pick');
const { getDomainAddress, apiSuccess, apiError } = require('../../utils/helper');
const { Setting } = require('../../models');

// create country
const createSetting = catchAsync(async (req, res) => {
  let upload = multer({ storage: storage}).single('image');
  let body = req.body;
  await upload(req, res, async function(err) {
    if(req.file){
      if (req.fileValidationError) {
        return apiResponse.validationErrorWithData(res, "Validation Error.", req.fileValidationError)
      }
      else if (err instanceof multer.MulterError) {
        return res.status(500).send({status : 0,  message: `Could not upload the file: ${req.file.originalname}. ${err}` , data : null});
      }
      body.appLogo = getDomainAddress(req) + `/uploads/` + req.file.filename;
      await createRecordAndGet(Collection, body, res);
    }
    else{
      await createRecordAndGet(Collection, body, res);
    }
  })
});

const getSettings = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'active']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const roles = await Setting.paginate(filter, options);
  if (roles) {
    apiSuccess(res, roles, 'Setting retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const getSetting = catchAsync(async (req, res) => {
  const role = await Setting.findById(req.params.settingId);
  if (role) {
    apiSuccess(res, role, 'Setting retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const updateSetting = catchAsync(async (req, res) => {
  let upload = multer({ storage: storage}).single('image');
  let body = req.body;
  await upload(req, res, async function(err) {
    console.log('FILE ---------------------------',req.file)
    if(req.file){
      if (req.fileValidationError) {
        return apiResponse.validationErrorWithData(res, "Validation Error.", req.fileValidationError)
      }
      else if (err instanceof multer.MulterError) {
        return res.status(500).send({status : 0,  message: `Could not upload the file: ${req.file.originalname}. ${err}` , data : null});
      }
      body.appLogo = getDomainAddress(req) + `/uploads/` + req.file.filename;
      console.log('MUvdjbsvjdbsd', body)
      await updateDocumentAndGet(Collection, req.params.settingId, body, res);
    }
    else{
      await updateDocumentAndGet(Collection, req.params.settingId, body, res);
    }
  })
});

const deleteSetting = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.cityId, res);
});

const deleteSettings = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet(Collection, req.body.ids, res);
});

module.exports = {
  createSetting,
  getSettings,
  getSetting,
  updateSetting,
  deleteSetting,
  deleteSettings,
};
