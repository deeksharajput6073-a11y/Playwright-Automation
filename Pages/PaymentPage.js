class PaymentPage {

    constructor(page) {

        this.page = page;

        this.nameOnCard = page.locator("input[data-qa='name-on-card']");

        this.cardNumber = page.locator("input[data-qa='card-number']");

        this.cvc = page.locator("input[data-qa='cvc']");

        this.expiryMonth = page.locator("input[data-qa='expiry-month']");

        this.expiryYear = page.locator("input[data-qa='expiry-year']");

        this.payBtn = page.locator("button[data-qa='pay-button']");

        this.successMsg = page.locator("[data-qa='order-placed']");
    }

    async makePayment(
        name,
        card,
        cvc,
        month,
        year
    ) {

        await this.nameOnCard.fill(name);

        await this.cardNumber.fill(card);

        await this.cvc.fill(cvc);

        await this.expiryMonth.fill(month);

        await this.expiryYear.fill(year);

        await this.payBtn.click();
    }
}

module.exports = PaymentPage;