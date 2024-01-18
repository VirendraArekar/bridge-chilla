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
const { Notification } = require('../../models');
const { apiSuccess, apiError } = require('../../utils/helper');
const Collection = 'Notification';

// create country
const createNotification = catchAsync(async (req, res) => {
  await createRecordAndGet(Collection, req.body, res);
});

const getNotifications = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'active']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  options.populate = "user";
  const roles = await Notification.paginate(filter, options);

  if (roles) {
    apiSuccess(res, roles, 'Notification retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const getNotification = catchAsync(async (req, res) => {
  const role = await Notification.findById(req.params.notificationId).populate('user');
  if (role) {
    apiSuccess(res, role, 'Notification retrieve successfully');
  } else {
    apiError(res, { error: 'No record' }, 'No record found');
  }
});

const updateNotification = catchAsync(async (req, res) => {
  await Notification.updateOne({_id : req.params.notificationId}, req.body)
  .then(async(data) => {
     let role = await Notification.findOne(data._id);
     apiSuccess(res, role, 'Notification update successfully');
  })
  .catch((err) => {
    apiError(res, err, 'No record found');
  })
});

const deleteNotification = catchAsync(async (req, res) => {
  await deleteDocumentAndGet(Collection, req.params.cityId, res);
});

const deleteNotifications = catchAsync(async (req, res) => {
  await deleteAllDocumentAndGet(Collection, req.body.ids, res);
});

module.exports = {
  createNotification,
  getNotifications,
  getNotification,
  updateNotification,
  deleteNotification,
  deleteNotifications,
};
