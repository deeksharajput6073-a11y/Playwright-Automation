const { test } = require('@playwright/test');
const fs = require('fs');

const BasePage = require('../pages/BasePage');
const LoginPage = require('../pages/LoginPage');
const SignupPage = require('../pages/SignupPage');
const SignupDetailsPage = require('../pages/SignupDetailsPage');

const TestData = require('../fixtures/testData');

test('Signup Test', async ({ page }) => {

    const uniqueEmail = `test${Date.now()}@gmail.com`;

    // Save email to JSON
    fs.writeFileSync('./fixtures/userData.json', JSON.stringify({ email: uniqueEmail, password: 'Test@123' }, null, 2));

    console.log(`Email: ${uniqueEmail}`);
    console.log('Password: Test@123');

    const basePage = new BasePage(page);

    const loginPage = new LoginPage(page);

    const signupPage = new SignupPage(page);

    const signupDetailsPage = new SignupDetailsPage(page);

    await basePage.launchURL();

    await loginPage.openSignupLoginPage();

    await signupPage.signup(TestData.SignupPage.name, uniqueEmail);

    await signupDetailsPage.fillAccountInformation(TestData.SignupDetails);
});
