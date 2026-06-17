const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');

class CartPage extends BasePage {

    constructor(page) {

        super(page);

        this.cartTable = page.locator('#cart_info');

        this.productRow = page.locator('.cart_product');

        this.productPrice = page.locator('.cart_price');

        this.productQuantity = page.locator('.cart_quantity');

        this.productTotal = page.locator('.cart_total');

        this.proceedCheckoutBtn = page.locator('.check_out');

        this.removeBtn = page.locator('.cart_quantity_delete');
    }

    async verifyCartVisible() {
        await expect(this.cartTable).toBeVisible();
    }

    async getProductCount() {
        return await this.productRow.count();
    }

    async proceedToCheckout() {
        await this.verifyCartVisible();
        await this.click(this.proceedCheckoutBtn);
    }

    async removeProduct() {
        const initialCount = await this.getProductCount();

        await this.verifyCartVisible();
        await this.click(this.removeBtn);

        await expect(this.productRow).toHaveCount(Math.max(0, initialCount - 1));
    }
}

module.exports = CartPage;