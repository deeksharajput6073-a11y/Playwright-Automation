const { test, expect } = require('@playwright/test');
const ProductPage = require('../../pages/ProductPage');

test(
    'Remove Product From Cart',
    async ({ page }) => {

        const product = new ProductPage(page);

        await page.goto('/products');

        // Add product first
        await product.addFirstProductToCart();

        await product.clickViewCart();

        // Remove product
        await product.removeProduct();

        await expect(product.emptyCartText).toBeVisible();
    }
);