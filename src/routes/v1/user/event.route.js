const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const eventValidation = require('../../../validations/event.validation');
const eventController = require('../../../controllers/user/event.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(eventValidation.createEvent), eventController.createEvent)
  .get(auth('getUsers'), validate(eventValidation.getEvents), eventController.getEvents);

router
  .route('/:eventId')
  .get(auth('getUsers'), validate(eventValidation.getEvent), eventController.getEvent)
  .patch(auth('manageUsers'), validate(eventValidation.updateEvent), eventController.updateEvent)
  .delete(auth('manageUsers'), validate(eventValidation.deleteEvent), eventController.deleteEvent);

router.route('/deleteAll').post(validate(eventValidation.deleteEvents), eventController.deleteEvents);

module.exports = router;
