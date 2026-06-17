const { test, expect } = require('@playwright/test');
const ProductPage = require('../../pages/ProductPage');

test(
    'Verify Product Details',
    async ({ page }) => {

        const product = new ProductPage(page);

        await page.goto('https://automationexercise.com/products');

        await product.viewFirstProduct();

        await expect(page).toHaveURL(/product_details/);

        await expect(product.productInfo).toBeVisible();
    }
);