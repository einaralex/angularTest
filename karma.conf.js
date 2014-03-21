// Karma configuration
// Generated on Mon Mar 10 2014 19:27:27 GMT+0000 (Greenwich Standard Time)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',

    browsers: ['Chrome'],
    // frameworks to use,
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/*.js',
      'src/services/*.js',
      'src/controllers/*.js',
      'test/*.spec.js',
    ],

    reporters: ['progress', 'coverage'],

    preprocessors: {
      '**/src/*.js': 'coverage',
      '**/src/**/*.js': 'coverage'
    },

    coverageReporter: {
        reporters: [
      {type: 'text-summary', dir:'test/coverage/'},
      {type: 'html', dir:'test/coverage/'}
     ],
    },

    port: 9808,

    colors: true,
    logLevel: config.LOG_INFO,
    
    captureTimeout: 60000,
    singleRun: false
  });
};
