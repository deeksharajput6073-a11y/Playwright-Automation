const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/ProductPage');

test(
    'Add Product To Cart',
    async ({ page }) => {

        const product = new ProductPage(page);

        await page.goto('/products');

        await product.addFirstProductToCart();

        await expect(product.viewCartBtn).toBeVisible();
    }
);