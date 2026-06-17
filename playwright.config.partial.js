const { defineConfig } =
    require('@playwright/test');

module.exports =
    defineConfig({

        testDir: './tests',

        fullyParallel: false,

        workers: 3,

        use: {

            baseURL:
                'https://automationexercise.com',

            headless: false,

            screenshot:
                'only-on-failure',

            video:
                'retain-on-failure',

            trace:
                'retain-on-failure'
        },

        reporter: [

            ['list'],
            ['html'],
            ['allure-playwright']
        ],

        projects: [

            {
                name: 'launch',

                testMatch:
                    /launch\.spec\.js/
            },

            {
                name: 'signup',

                testMatch:
                    /signup\.spec\.js/,

                dependencies:
                    ['launch']
            },

            {
                name: 'signupdetails',

                testMatch:
                    /signupdetails\.spec\.js/,

                dependencies:
                    ['signup']
            },

            {
                name: 'login',

                testMatch:
                    /login\.spec\.js/,

                dependencies:
                    ['signupdetails']
            },

            {
                name:
                    'remaining-tests',

                testIgnore: [

                    /launch\.spec\.js/,
                    /signup\.spec\.js/,
                    /signupdetails\.spec\.js/,
                    /login\.spec\.js/,
                    /deleteAccount\.spec\.js/
                ],

                dependencies:
                    ['login']
            },

            {
                name:
                    'delete-account',

                testMatch:
                    /deleteAccount\.spec\.js/,

                dependencies:
                    ['remaining-tests']
            }
        ]
    });