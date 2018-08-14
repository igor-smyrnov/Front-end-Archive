// Karma configuration
// Generated on Sat Jul 30 2016 20:07:48 GMT+0200 (Центральноевропейский (лето))

module.exports = function(config) {
    config.set({

    basePath: './app',

    preprocessors: {
        '**/*.html': ['ng-html2js'],
        '**/!(*.mock|*.spec).js': ['coverage']
    },

    frameworks: ['jasmine'],

    reporters: ['progress', 'coverage'],

    files: [
        '../bower_components/angular/angular.js',
        '../bower_components/angular-ui-router/release/angular-ui-router.min.js',
        '../bower_components/angular-utils-pagination/dirPagination.js',
        '../bower_components/angular-mocks/angular-mocks.js',
        '**/*.js',
        '**/*.html',
        '*!(.module|.spec).js',
        '!(bower_components)/**/*!(.module|.spec).js',
        '**/*.spec.js'
    ],

    // web server port
    port: 9876,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    plugins : [
        'karma-chrome-launcher',
        'karma-jasmine',
        'karma-ng-html2js-preprocessor',
        'karma-coverage'
    ],
    ngHtml2JsPreprocessor: {
        stripPrefix: './app',
        moduleName: 'templates'
    },
    coverageReporter: {
        type : 'html',
        // output coverage reports
        dir : '../coverage/'
    }
    
  })
}; 
