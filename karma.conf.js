module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'browserify', 'sinon-chai'],
    files: [
      '*.spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
      '*.spec.js': 'browserify'
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
