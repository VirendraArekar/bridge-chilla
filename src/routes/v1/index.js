const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

// global api
const countryRoute = require('./global/country.route');
const stateRoute = require('./global/state.route');
const cityRoute = require('./global/city.route');

// user api
const commentRoute = require('./user/comment.route');
const emailSettingRoute = require('./user/email.setting.route');
const eventRoute = require('./user/event.route');
const fcmSettingRoute = require('./user/fcm.setting.route');
const followerRoute = require('./user/follower.route');
const followingRoute = require('./user/following.route');
const liveConsultationRoute = require('./user/live.consultation.route');
const notificationRoute = require('./user/notification.route');
const offerRoute = require('./user/offer.route');
const pageRoute = require('./user/page.route');
const paymentSettingRoute = require('./user/payment.setting.route');
const planRoute = require('./user/plan.route');
const reviewRoute = require('./user/review.route');
const roleRoute = require('./user/role.route');
const serviceRoute = require('./user/service.route');
const settingRoute = require('./user/setting.route');
const supportRoute = require('./user/support.route');
const transactionRoute = require('./user/transaction.route');
const userPaymentRoute = require('./user/user.payment.route');
const userSettingRoute = require('./user/user.setting.route');
const walletRoute = require('./user/wallet.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/countries',
    route: countryRoute,
  },
  {
    path: '/states',
    route: stateRoute,
  },
  {
    path: '/cities',
    route: cityRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/user/comments',
    route: commentRoute,
  },
  {
    path: '/user/email-settings',
    route: emailSettingRoute,
  },
  {
    path: '/user/events',
    route: eventRoute,
  },
  {
    path: '/user/fcm-settings',
    route: fcmSettingRoute,
  },
  {
    path: '/user/followers',
    route: followerRoute,
  },
  {
    path: '/user/followings',
    route: followingRoute,
  },
  {
    path: '/user/live-consultations',
    route: liveConsultationRoute,
  },
  {
    path: '/user/notifications',
    route: notificationRoute,
  },
  {
    path: '/user/offers',
    route: offerRoute,
  },
  {
    path: '/user/pages',
    route: pageRoute,
  },
  {
    path: '/user/payment-settings',
    route: paymentSettingRoute,
  },
  {
    path: '/user/plans',
    route: planRoute,
  },
  {
    path: '/user/reviews',
    route: reviewRoute,
  },
  {
    path: '/user/roles',
    route: roleRoute,
  },
  {
    path: '/user/services',
    route: serviceRoute,
  },
  {
    path: '/user/settings',
    route: settingRoute,
  },
  {
    path: '/user/supports',
    route: supportRoute,
  },
  {
    path: '/user/transactions',
    route: transactionRoute,
  },
  {
    path: '/user/payments',
    route: userPaymentRoute,
  },
  {
    path: '/user/settings',
    route: userSettingRoute,
  },
  {
    path: '/user/wallets',
    route: walletRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
