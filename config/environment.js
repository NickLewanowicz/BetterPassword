'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'ledger-password',
    podModulePrefix: 'ledger-password/pods',
    environment,
    rootURL: '/BetterPassword/',
    locationType: 'none',
    firebase: {
      apiKey: 'AIzaSyBfyC4-w5gmOEkFfu_721q02XARMbWyYhM',
      authDomain: 'hci-analytics-e3484.firebaseapp.com',
      databaseURL: 'https://hci-analytics-e3484.firebaseio.com',
      storageBucket: 'hci-analytics-e3484.appspot.com',
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  ENV['ember-cli-mirage'] = {
    enabled: true
  };
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
    ENV.baseUrl = '/BetterPassword/';
    // here you can enable a production-specific feature
  }

  return ENV;
};
