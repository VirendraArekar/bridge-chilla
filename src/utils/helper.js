const ErrorLog = require('../models/error.log.model');

const apiSuccess = (res, data, message) => {
  res.status(200).send({
    code: 200,
    message,
    data,
    error: null,
  });
};

const apiError = (res, err, message) => {
  res.status(200).send({
    code: 500,
    message,
    data: null,
    error: err,
  });
};

const dbErrorLog = async (key, priority = 'Low', request, error) => {
  let modifiedRequest = (request?.params || request?.query) ? {
    query : request.query,
    params : request.params,
  } : request;

  console.log('MODIFIED - DATA', request, modifiedRequest)

  const log = new ErrorLog({
    key,
    // userId : 111,
    priority,
    request : modifiedRequest,
    error,
  });
  await log.save(function(err, data){
    if(err)
       console.error('Error ---------', err)
    else
       console.log('SUccess ------------------', data)
  });
};

module.exports = {
  apiSuccess,
  apiError,
  dbErrorLog,
};
