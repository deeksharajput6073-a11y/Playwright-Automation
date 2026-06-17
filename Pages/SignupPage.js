const BasePage = require('./BasePage');

class SignupPage extends BasePage {

    constructor(page) {

        super(page);

        this.name = page.locator("[data-qa='signup-name']");

        this.email = page.locator("[data-qa='signup-email']");

        this.signupBtn = page.locator("[data-qa='signup-button']");
    }

    async signup(name, email) {

        await this.fill(this.name, name);

        await this.fill(this.email, email);

        await this.click(this.signupBtn);
    }
}

module.exports = SignupPage;