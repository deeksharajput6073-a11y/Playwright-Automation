const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');

class CheckoutPage extends BasePage {

    constructor(page) {
        super(page);

        this.addToCartBtn = page.locator("a[data-product-id='1']").first();
        this.continueShoppingBtn = page.getByRole('button', { name: 'Continue Shopping' });
        this.cartBtn = page.locator("a[href='/view_cart']").first();
        this.proceedToCheckoutBtn = page.locator("a:has-text('Proceed To Checkout'), button:has-text('Proceed To Checkout')");
        this.commentBox = page.locator("textarea[name='message']");
        this.placeOrderBtn = page.locator("a:has-text('Place Order'), button:has-text('Place Order')");
        this.addressDetails = page.locator('#address_delivery');
    }

    async addProductToCart() {
        await this.click(this.addToCartBtn);
        await this.click(this.continueShoppingBtn);
    }

    async goToCart() {
        await this.click(this.cartBtn);
        await this.page.waitForURL('**/view_cart');
    }

    async proceedToCheckout() {
        await this.page.waitForLoadState('networkidle');

        await this.proceedToCheckoutBtn.waitFor({
            state: 'visible',
            timeout: 30000
        });

        await this.proceedToCheckoutBtn.click();
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