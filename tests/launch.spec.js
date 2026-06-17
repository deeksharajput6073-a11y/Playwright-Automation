const { test, expect } = require('@playwright/test');
const BasePage = require('../pages/BasePage');
const env = require('../config/env');

test('Launch URL', async ({ page }) => {

    const basePage = new BasePage(page);

    await basePage.launchURL();

    await expect(page).toHaveURL(env.baseURL);
});