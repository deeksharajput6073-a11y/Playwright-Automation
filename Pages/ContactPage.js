const { expect } = require('@playwright/test');

class ContactPage {

    constructor(page) {

        this.page = page;

        this.contactUsBtn = page.locator("a[href='/contact_us']");

        this.contactUsHeader = page.locator("h2:has-text('Get In Touch')");
    }

    async openContactPage() {

        await this.contactUsBtn.click();
    }

    async verifyContactPageVisible() {

        await expect(this.contactUsHeader).toBeVisible();
    }
}

module.exports = ContactPage;