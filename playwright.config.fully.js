const { defineConfig } =
    require('@playwright/test');

module.exports =
    defineConfig({

        testDir: './tests',

        fullyParallel: true,

        workers: 5,

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
        ]
    });