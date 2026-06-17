const { test } = require('@playwright/test');

const ContactPage = require('../../pages/ContactPage');

test(
    'Verify Contact Us Page',
    async ({ page }) => {

        const contact = new ContactPage(page);

        await page.goto('/');

        await contact.openContactPage();

        await contact.verifyContactPageVisible();
    }
);