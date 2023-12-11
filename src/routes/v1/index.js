const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

// global api
const countryRoute = require('./global/country.route');
const stateRoute = require('./global/state.route');
const cityRoute = require('./global/city.route');

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
