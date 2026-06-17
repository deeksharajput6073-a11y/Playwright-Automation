const { expect } = require('@playwright/test');

class SubscriptionPage {

    constructor(page) {

        this.page = page;

        this.subscriptionEmail = page.locator("#susbscribe_email");

        this.subscribeBtn = page.locator("#subscribe");

        this.successMsg = page.locator(".alert-success.alert");
    }

    async subscribe(email) {

        await this.subscriptionEmail.fill(email);

        await this.subscribeBtn.click();
    }

    async verifySubscriptionSuccess() {

        await expect(this.successMsg).toContainText('You have been successfully subscribed!');
    }
}

module.exports = SubscriptionPage;