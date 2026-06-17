const { test, expect } = require('@playwright/test');
const ProductPage = require('../../pages/ProductPage');

test(
    'Search Product Test',
    async ({ page }) => {

        const product = new ProductPage(page);

        await page.goto('https://automationexercise.com/products');

        await product.searchProduct('Blue Top');

        await expect(product.searchedProductsText).toBeVisible();
    }
);