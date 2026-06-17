const { test, expect } = require('@playwright/test');
const HomePage = require('../Pages/HomePage');

test('Verify Home Page', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate('/');
    await expect(page).toHaveURL('/');

    await homePage.verifyHomePageContents();
});