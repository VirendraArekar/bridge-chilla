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
const { apiSuccess, apiError } = require('../../utils/helper');
const { Event } = require('../../models');
const Collection = 'Event';

// create country
const createEvent = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getEvents = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'active']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  options.populate = "user";
  const roles = await Event.paginate(filter, options);
  if (roles) {
    apiSuccess(res, roles, 'Event retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const getEvent = catchAsync(async (req, res) => {
  const role = await Event.findById(req.params.eventId);
  if (role) {
    apiSuccess(res, role, 'Event retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const updateEvent = catchAsync(async (req, res) => {
  await Event.updateOne({_id : req.params.eventId}, req.body)
  .then(async(data) => {
     let role = await Event.findOne(data._id);
     apiSuccess(res, role, 'Event update successfully');
  })
  .catch((err) => {
    apiError(res, err, 'No record found');
  })
});

const deleteEvent = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.cityId, res);
});

const deleteEvents = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet(Collection, req.body.ids, res);
});

module.exports = {
  createEvent,
  getEvents,
  getEvent,
  updateEvent,
  deleteEvent,
  deleteEvents,
};
