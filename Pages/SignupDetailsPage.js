const BasePage = require('./BasePage');

class SignupDetailsPage extends BasePage {

    constructor(page) {
        super(page);

        // Title
        this.mrRadio = page.locator("#id_gender1");

        this.mrsRadio = page.locator("#id_gender2");

        // Account Information
        this.password = page.locator("#password");

        this.dayDropdown = page.locator("#days");

        this.monthDropdown = page.locator("#months");

        this.yearDropdown = page.locator("#years");

        this.newsletterCheckbox = page.locator("#newsletter");

        this.specialOfferCheckbox = page.locator("#optin");

        // Address Information
        this.firstName = page.locator("#first_name");

        this.lastName = page.locator("#last_name");

        this.company = page.locator("#company");

        this.address1 = page.locator("#address1");

        this.address2 = page.locator("#address2");

        this.country = page.locator("#country");

        this.state = page.locator("#state");

        this.city = page.locator("#city");

        this.zipcode = page.locator("#zipcode");

        this.mobileNumber = page.locator("#mobile_number");

        this.createAccountBtn = page.locator("button[data-qa='create-account']");
    }

    async fillAccountInformation(userData) {

        // Title
        await this.click(this.mrRadio);

        // Password
        await this.fill(this.password, userData.password);

        // Date of Birth
        await this.dayDropdown.selectOption(userData.day);
        await this.monthDropdown.selectOption(userData.month);
        await this.yearDropdown.selectOption(userData.year);

        // Checkboxes
        await this.click(this.newsletterCheckbox);
        await this.click(this.specialOfferCheckbox);

        // Address Information
        await this.fill(this.firstName, userData.firstName);
        await this.fill(this.lastName, userData.lastName);
        await this.fill(this.company, userData.company);
        await this.fill(this.address1, userData.address1);
        await this.fill(this.address2, userData.address2);

        // Country Dropdown
        await this.country.selectOption(userData.country);

        await this.fill(this.state, userData.state);
        await this.fill(this.city, userData.city);
        await this.fill(this.zipcode, userData.zipcode);
        await this.fill(this.mobileNumber, userData.mobileNumber);

        // Create Account
        await this.click(this.createAccountBtn);
    }
}

module.exports = SignupDetailsPage;