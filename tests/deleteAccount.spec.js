const { test } = require('@playwright/test');

const fs = require('fs');

const BasePage = require('../pages/BasePage');

const LoginPage = require('../pages/LoginPage');

test(
    'Delete Account Test',
    async ({ page }) => {

        // Read signup credentials
        const userData = JSON.parse(fs.readFileSync('./fixtures/userData.json', 'utf-8'));

        console.log(`Email: ${userData.email}`);

        console.log(`Password: ${userData.password}`);

        const basePage = new BasePage(page);

        const loginPage = new LoginPage(page);

        await basePage.launchURL();

        // Login with signup credentials
        await loginPage.login(
            userData.email,
            userData.password
        );

        // Delete Account
        await loginPage.deleteAccount();

        console.log('Account Deleted Successfully');
    }
);