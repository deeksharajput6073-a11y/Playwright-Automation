const { test, expect } = require('@playwright/test');
const ProductPage = require('../../pages/ProductPage');
const CartPage = require('../../pages/CartPage');

test(
    'Verify Recommended Items',
    async ({ page }) => {

        const product = new ProductPage(page);

        const cart = new CartPage(page);

        await page.goto('/');

        await product.scrollToRecommended();

        await product.addRecommendedItem();

        await product.clickViewCart();

        await expect(cart.cartTable).toBeVisible();
    }
);