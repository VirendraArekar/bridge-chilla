const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const WalletValidation = require('../../../validations/wallet.validation');
const WalletController = require('../../../controllers/user/wallet.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(WalletValidation.createWallet), WalletController.createWallet)
  .get(auth('getUsers'), validate(WalletValidation.getWallets), WalletController.getWallets);

router
  .route('/:walletId')
  .get(auth('getUsers'), validate(WalletValidation.getWallet), WalletController.getWallet)
  .patch(auth('manageUsers'), validate(WalletValidation.updateWallet), WalletController.updateWallet)
  .delete(auth('manageUsers'), validate(WalletValidation.deleteWallet), WalletController.deleteWallet);

router.route('/deleteAll').post(validate(WalletValidation.deleteWallets), WalletController.deleteWallets);

module.exports = router;
