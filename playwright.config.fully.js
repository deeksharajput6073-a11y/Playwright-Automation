const { defineConfig } =
    require('@playwright/test');

module.exports =
    defineConfig({

        testDir: './tests',

        timeout: 90000,  // Increased from default 30000ms

        expect: {
            timeout: 10000
        },

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
                'retain-on-failure',

            actionTimeout: 15000,

            navigationTimeout: 60000
        },

        reporter: [

            ['list'],
            ['html'],
            ['allure-playwright']
        ]
    });