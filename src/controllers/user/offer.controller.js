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
const { Offer } = require('../../models');
const { getDomainAddress, apiSuccess, apiError } = require('../../utils/helper');
const Collection = 'Offer';
const multer = require('multer');
const { storage } = require('../../utils/upload');

// create country
const createOffer = catchAsync(async (req, res) => {
  console.log('BODY ------------------------', req.body)
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
      body.offerImage = getDomainAddress(req) + `/uploads/` + req.file.filename;
      await createRecordAndGet(Collection, body, res);
    }
    else{
      await createRecordAndGet(Collection, body, res);
    }
  })
  console.log('After Update -------',body)

});

const getOffers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'active']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  options.populate = "user";
  const roles = await Offer.paginate(filter, options);
  if (roles) {
    apiSuccess(res, roles, 'Offer retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const getOffer = catchAsync(async (req, res) => {
  const role = await Offer.findById(req.params.offerId);
  if (role) {
    apiSuccess(res, role, 'Offer retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const updateOffer = catchAsync(async (req, res) => {
  await Offer.updateOne({_id : req.params.offerId}, req.body)
  .then(async(data) => {
     let role = await Offer.findOne(data._id);
     apiSuccess(res, role, 'Offer update successfully');
  })
  .catch((err) => {
    apiError(res, err, 'No record found');
  })
});

const deleteOffer = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.cityId, res);
});

const deleteOffers = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet(Collection, req.body.ids, res);
});

module.exports = {
  createOffer,
  getOffers,
  getOffer,
  updateOffer,
  deleteOffer,
  deleteOffers,
};
