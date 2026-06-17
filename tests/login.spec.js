const { test } = require('@playwright/test');

const fs = require('fs');

const BasePage = require('../pages/BasePage');

const LoginPage = require('../pages/LoginPage');

test('Login Test',
    async ({ page }) => {

        // Read signup email
        const userData =
            JSON.parse(
                fs.readFileSync(
                    './fixtures/userData.json',
                    'utf-8'
                )
            );

        console.log(`Email: ${userData.email}`);

        console.log(`Password: ${userData.password}`);

        const basePage = new BasePage(page);

        const loginPage = new LoginPage(page);

        await basePage.launchURL();

        await loginPage.login(
            userData.email,
            userData.password
        );
    }
);