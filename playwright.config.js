const { defineConfig } = require('@playwright/test');
const dotenv = require('dotenv');

// Read environment from command
const env = process.env.TEST_ENV || 'dev';

// Load corresponding .env file
dotenv.config({
    path: `.env.${env}`
});


module.exports = defineConfig({

    testDir: './tests',

    reporter: [
        ['list'],
        ['allure-playwright']
    ],

    fullyParallel: true,

    workers: 1,

    use: {
        baseURL: process.env.BASE_URL,
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        actionTimeout: 30000,
        navigationTimeout: 60000,
        headless: true
    },

    projects: [

        {
            name: 'launch',
            testMatch: /launch\.spec\.js/
        },

        {
            name: 'signup',
            testMatch: /signup\.spec\.js/,
            dependencies: ['launch']
        },

        {
            name: 'signupdetails',
            testMatch: /signupdetails\.spec\.js/,
            dependencies: ['signup']
        },

        {
            name: 'login',
            testMatch: /login\.spec\.js/,
            dependencies: ['signup']
        },

        {
            name: 'remaining-tests',
            testIgnore: [
                /launch\.spec\.js/,
                /signup\.spec\.js/,
                /login\.spec\.js/,
                /deleteAccount\.spec\.js/
            ],
            dependencies: ['login']
        },

        {
            name: 'delete-account',
            testMatch: /deleteAccount\.spec\.js/,
            dependencies: ['remaining-tests']
        }
    ]
});