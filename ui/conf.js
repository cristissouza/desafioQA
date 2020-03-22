/* eslint-disable import/no-extraneous-dependencies */

require('dotenv').config({ path: '.env' });

const reporter = require('cucumber-html-reporter');

exports.config = {
  seleniumAddress: process.env.E2E_WEBDRIVER_URL,
  ignoreUncaughtExceptions: true,
  baseUrl: 'https://www.unimed.coop.br/',
  specs: ['features/*.feature'],
  defaultTimeoutInterval: 1000,
  framework: 'custom',
  capabilities: {
    browserName: 'chrome',
    maxInstances: 1,
    'goog:chromeOptions': {
      args: [
        // disable chrome's wakiness
        '--disable-gpu',
        '--window-size=1920,1080',
        '--disable-infobars',
        '--disable-extensions',
        'verbose',
        'log-path=/tmp/chromedriver.log',
      ],
      prefs: {
        // disable chrome's annoying password manager
        'profile.password_manager_enabled': false,
        credentials_enable_service: false,
        password_manager_enabled: false,
      },
      w3c: false,
    },
  },
  onCleanUp() {
    const options = {
      theme: 'bootstrap',
      jsonFile: 'results.json',
      output: 'results.html',
      launchReport: true,
    };
    return reporter.generate(options);
  },
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: 'features/step_definitions/*.steps.js',
    tags: ['~@NoImplemented', '~@Skip'],
    format: ['json:results.json'],
    profile: false,
    ignoreUndefinedDefinitions: true,
    'no-source': true,
  },
};
