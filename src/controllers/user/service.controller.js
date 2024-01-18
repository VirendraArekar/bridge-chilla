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
const { Service } = require('../../models');
const { apiSuccess, apiError } = require('../../utils/helper');
const Collection = 'Service';

// create country
const createService = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getServices = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'active']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const roles = await Service.paginate(filter, options);
  if (roles) {
    apiSuccess(res, roles, 'Service retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const getService = catchAsync(async (req, res) => {
  const role = await Service.findById(req.params.serviceId);
  if (role) {
    apiSuccess(res, role, 'Service retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const updateService = catchAsync(async (req, res) => {
  await Service.updateOne({_id : req.params.serviceId}, req.body)
  .then(async(data) => {
     let Service = await Service.findOne(data._id);
     apiSuccess(res, role, 'Service update successfully');
  })
  .catch((err) => {
    apiError(res, err, 'No record found');
  })
});

const deleteService = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.cityId, res);
});

const deleteServices = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet(Collection, req.body.ids, res);
});

module.exports = {
  createService,
  getServices,
  getService,
  updateService,
  deleteService,
  deleteServices,
};
