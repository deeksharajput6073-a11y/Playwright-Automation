const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');

class CheckoutPage extends BasePage {

    constructor(page) {
        super(page);

        this.addToCartBtn = page.locator("a[data-product-id='1']").first();
        this.continueShoppingBtn = page.getByRole('button', { name: 'Continue Shopping' });
        this.cartBtn = page.locator("a[href='/view_cart']").first();
        this.proceedToCheckoutBtn = page.getByRole('link', { name: 'Proceed To Checkout' });
        this.commentBox = page.locator("textarea[name='message']");
        this.placeOrderBtn = page.getByRole('link', { name: 'Place Order' });
        this.addressDetails = page.locator('#address_delivery');
    }

    async addProductToCart() {
        await this.click(this.addToCartBtn);
        await this.click(this.continueShoppingBtn);
    }

    async goToCart() {
        await this.click(this.cartBtn);
    }

    async proceedToCheckout() {
        await this.click(this.proceedToCheckoutBtn);
    }

    async verifyAddressVisible() {
        await expect(this.addressDetails).toBeVisible();
    }

    async addComment(comment) {
        await this.fill(this.commentBox, comment);
    }

    async clickPlaceOrder() {
        await this.click(this.placeOrderBtn);
    }
}

module.exports = CheckoutPage;