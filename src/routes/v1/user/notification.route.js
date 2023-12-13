const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const NotificationValidation = require('../../../validations/notification.validation');
const NotificationController = require('../../../controllers/user/notification.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(NotificationValidation.createNotification), NotificationController.createNotification)
  .get(auth('getUsers'), validate(NotificationValidation.getNotifications), NotificationController.getNotifications);

router
  .route('/:notificationId')
  .get(auth('getUsers'), validate(NotificationValidation.getNotification), NotificationController.getNotification)
  .patch(auth('manageUsers'), validate(NotificationValidation.updateNotification), NotificationController.updateNotification)
  .delete(
    auth('manageUsers'),
    validate(NotificationValidation.deleteNotification),
    NotificationController.deleteNotification
  );

router
  .route('/deleteAll')
  .post(validate(NotificationValidation.deleteNotifications), NotificationController.deleteNotifications);

module.exports = router;
