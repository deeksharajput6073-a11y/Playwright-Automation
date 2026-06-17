const BasePage = require('./BasePage');

class LoginPage extends BasePage {

    constructor(page) {
        super(page);

        // Login Page Locators
        this.signupLoginBtn = page.locator("a[href='/login']");

        this.email = page.locator("input[data-qa='login-email']");

        this.password = page.locator("input[data-qa='login-password']");

        this.loginBtn = page.locator("button[data-qa='login-button']");

        // Delete Account Locators
        this.deleteAccountBtn = page.locator("a[href='/delete_account']");

        this.accountDeletedText = page.locator("h2[data-qa='account-deleted']");

        this.continueBtn = page.locator("a[data-qa='continue-button']");
    }

    async openSignupLoginPage() {
        await this.click(this.signupLoginBtn);
    }

    async login(email, password) {

        await this.openSignupLoginPage();

        await this.fill(this.email, email);

        await this.fill(this.password, password);

        await this.click(this.loginBtn);
    }

    async deleteAccount() {

        await this.click(this.deleteAccountBtn);

        await this.accountDeletedText.waitFor({ state: 'visible', timeout: 10000 });

        await this.click(this.continueBtn);
    }
}

module.exports = LoginPage;