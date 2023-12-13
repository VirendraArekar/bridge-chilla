const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const TransactionValidation = require('../../../validations/transaction.validation');
const TransactionController = require('../../../controllers/user/transaction.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(TransactionValidation.createTransaction), TransactionController.createTransaction)
  .get(auth('getUsers'), validate(TransactionValidation.getTransactions), TransactionController.getTransactions);

router
  .route('/:transactionId')
  .get(auth('getUsers'), validate(TransactionValidation.getTransaction), TransactionController.getTransaction)
  .patch(auth('manageUsers'), validate(TransactionValidation.updateTransaction), TransactionController.updateTransaction)
  .delete(auth('manageUsers'), validate(TransactionValidation.deleteTransaction), TransactionController.deleteTransaction);

router
  .route('/deleteAll')
  .post(validate(TransactionValidation.deleteTransactions), TransactionController.deleteTransactions);

module.exports = router;
