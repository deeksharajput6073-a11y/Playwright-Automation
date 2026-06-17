const { test, expect } = require('@playwright/test');
const ProductPage = require('../../pages/ProductPage');
const CartPage = require('../../pages/CartPage');

test(
    'Verify Cart Validation',
    async ({ page }) => {

        const product = new ProductPage(page);

        const cart = new CartPage(page);

        await page.goto('/products');

        await product.addFirstProductToCart();

        await product.clickViewCart();

        await expect(cart.cartTable).toBeVisible();

        await expect(cart.productRow).toBeVisible();

        await expect(cart.productPrice).toBeVisible();

        await expect(cart.productQuantity).toBeVisible();

        await expect(cart.productTotal).toBeVisible();
    }
);