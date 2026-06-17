const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/ProductPage');

test(
    'Category Filter Test',
    async ({ page }) => {

        const product = new ProductPage(page);

        await page.goto('/products');

        await product.selectWomenCategory();

        await expect(product.categoryTitle).toBeVisible();
    }
);