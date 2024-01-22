const mongoose = require('mongoose');
const Country = require('../models/country.model');
const State = require('../models/state.model');
const City = require('../models/city.model');
const User = require('../models/user.model');
const Comment = require('../models/comment.model');
const EmailSetting = require('../models/email.setting.model');
const Event = require('../models/event.model');
const EventUser = require('../models/event.user.model');
const FcmSetting = require('../models/fcm.setting.model');
const Follower = require('../models/follower.model');
const Following = require('../models/following.model');
const LiveConsultation = require('../models/live.consultation.model');
const Notification = require('../models/notification.model');
const Offer = require('../models/offer.model');
const Page = require('../models/page.model');
const PaymentSetting  = require('../models/payment.setting.model');
const Plan  = require('../models/plan.model');
const Review = require('../models/review.model');
const Role = require('../models/role.model');
const Service = require('../models/service.model');
const Setting = require('../models/setting.model');
const Support = require('../models/support.model');
const Transaction = require('../models/transaction.model');
const UserPayment = require('../models/user.payment.model');
const UserSetting = require('../models/user.setting.model');
const Wallet = require('../models/wallet.model');

const { apiError, apiSuccess, dbErrorLog } = require('../utils/helper');
const pick = require('../utils/pick');
const ObjectId = mongoose.Types;

const currentModel = (model) => {
  let _model = model;
  switch (model) {
    case 'Country':
      _model = Country;
      break;
    case 'State':
      _model = State;
      break;
    case 'City':
      _model = City;
      break;
    case 'Comment':
      _model = Comment;
      break;
    case 'EmailSetting':
      _model = EmailSetting;
      break;
    case 'User':
      _model = User;
      break;
    case 'Event':
      _model = Event;
      break;
    case 'EventUser':
      _model = EventUser;
      break;
    case 'FcmSetting':
      _model = FcmSetting;
      break;
    case 'Follower':
      _model = Follower;
      break;
    case 'Following':
      _model = Following;
      break;
    case 'LiveConsultation' :
      _model = LiveConsultation;
      break;
    case 'Notification' :
      _model = Notification;
      break;
    case 'Offer' :
      _model = Offer;
      break;
    case 'Page' :
      _model = Page;
      break;
    case 'PaymentSetting' :
      _model = PaymentSetting;
      break;
    case 'Plan' :
      _model = Plan;
      break;
    case 'Review' :
      _model = Review;
      break;
    case 'Role' :
      _model = Role;
      break;
    case 'Service' :
      _model = Service;
      break;
    case 'Setting' :
      _model = Setting;
      break;
    case 'Support' :
      _model = Support;
      break;
    case 'Transaction' :
      _model = Transaction;
      break;
    case 'UserPayment' :
      _model = UserPayment;
      break;
    case 'UserSetting' :
      _model = UserSetting;
      break;
    case 'Wallet' :
    _model = Wallet;
    break;
    default:
      _model = User;
  }

  return _model;
};

const singleRecordAndGet = async (Model, _id, res, output = false) => {
  const keyword = Model;
  Model = currentModel(Model);
  const oneRecord = await Model.findById(_id, async (err, data) => {
    if (err) {
      dbErrorLog(`FindOne${keyword}`, 'Low', data, err);
      apiError(res, err, 'No record record');
    } else {
      if (output === true) return data;
      apiSuccess(res, data, `${keyword} is retrieved.`);
    }
  });

  return oneRecord;
};

const allRecordAndGet = async (Model, req, res, output = false) => {
  const keyword = Model;
  // eslint-disable-next-line no-param-reassign
  Model = currentModel(Model);
  const filter = req.query;
  // eslint-disable-next-line no-unused-expressions
  req.query.limit === 1000;
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const allRecord = await Model.paginate(filter, options);
  if (allRecord && allRecord?.results && allRecord?.results?.length) {
    if (output === true) return allRecord;
    apiSuccess(res, allRecord, `${keyword} list retrieved.`);
  } else {
    dbErrorLog(`FindAll${keyword}`, 'Low', req, { error: 'No record found.' });
    apiError(res, { error: 'No record found.' }, 'No record record');
  }
};

const createRecordAndGet = async (Model, data, res, output = false) => {
  const keyword = Model;
  Model = currentModel(Model);
  const record = new Model(data);
  const createRecord = await record.save(async (err, result) => {
    if (err) {
      dbErrorLog(`Create${keyword}`, 'Medium', data, err);
      apiError(res, err, 'Unable to create record');
    } else {
      if (output === true) return result;
      apiSuccess(res, result, `${keyword} is created.`);
    }
  });

  return createRecord;
};

const updateDocumentAndGet = async (Model, _id, data, res, output = false) => {
  const keyword = Model;
  Model = currentModel(Model);

  const updateRecord = await Model.findOneAndUpdate({ _id }, data, async (err, response) => {
    if (err) {
      dbErrorLog(`Update${keyword}`, 'Medium', data, err);
      apiError(res, err, 'Unable to update record');
    } else {
      await Model.findOne({ _id }, function (error, result) {
        if (error) {
          dbErrorLog(`UpdateAndFind${keyword}`, 'High', { _id }, error);
          apiError(res, error, 'Record not found');
        } else {
          if (output === true) return result;
          apiSuccess(res, result, `${keyword} is updated.`);
        }
      });
    }
  });
  return updateRecord;
};

const deleteDocumentAndGet = async (Model, _id, res, output = false) => {
  const keyword = Model;
  Model = currentModel(Model);

  const deleteRecord = await Model.findOneAndDelete({ _id }, async (err, data) => {
    if (err) {
      dbErrorLog(`DeleteOne${keyword}`, 'High', data, err);
      apiError(res, err, 'Unable to delete record');
    } else {
      if (output === true) return data;
      apiSuccess(res, data, `${keyword} is deleted.`);
    }
  });
  return deleteRecord;
};

const deleteAllDocumentAndGet = async (Model, _ids, res, output = false) => {
  const keyword = Model;
  Model = currentModel(Model);
  let ids = _ids.map((item) => {
    return mongoose.Types.ObjectId(item)
  })

  const deleteAllRecord = await Model.deleteMany({ _id : {$in : ids} }, async (err, data) => {
    if (err) {
      // dbErrorLog(`DeleteAll${keyword}`, 'High', data, err);
      apiError(res, err, 'Unable to delete all record');
    } else {
      if (output === true) return data;
      apiSuccess(res, data, `${keyword} is deleted.`);
    }
  });
  return deleteAllRecord;
};

module.exports = {
  updateDocumentAndGet,
  createRecordAndGet,
  deleteDocumentAndGet,
  deleteAllDocumentAndGet,
  singleRecordAndGet,
  allRecordAndGet,
};
