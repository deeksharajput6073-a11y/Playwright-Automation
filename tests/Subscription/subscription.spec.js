const { test } = require('@playwright/test');

const SubscriptionPage = require('../../pages/SubscriptionPage');

const data = require('../../fixtures/testData');

test(
    'Subscription Test',
    async ({ page }) => {

        const subscription = new SubscriptionPage(page);

        await page.goto('/');

        await page.evaluate(() => {

            window.scrollTo(0, document.body.scrollHeight);
        });

        await subscription.subscribe(data.subscription.email);

        await subscription.verifySubscriptionSuccess();
    });