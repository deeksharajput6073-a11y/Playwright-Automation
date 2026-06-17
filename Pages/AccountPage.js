const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');

class AccountPage extends BasePage {

    constructor(page) {
        super(page);

        this.loggedInUser = page.locator("a:has-text('Logged in as')");
        this.deleteBtn = page.locator("a[href='/delete_account']");
        this.accountDeletedMsg = page.locator("h2[data-qa='account-deleted']");
        this.continueBtn = page.locator("[data-qa='continue-button']");
    }

    async verifyLoggedInUserVisible() {
        await expect(this.loggedInUser).toBeVisible();
    }

    async verifyAccountDeleted() {
        await expect(this.accountDeletedMsg).toBeVisible({ timeout: 10000 });
    }

    async deleteAccount() {
        await this.click(this.deleteBtn);
        await this.verifyAccountDeleted();
        await this.click(this.continueBtn);
    }
}

module.exports = AccountPage;