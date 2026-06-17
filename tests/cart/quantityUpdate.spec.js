const { test, expect } = require('@playwright/test');
const ProductPage = require('../../pages/ProductPage');
const CartPage = require('../../pages/CartPage');

test(
    'Update Quantity Test',
    async ({ page }) => {

        const product = new ProductPage(page);

        const cart = new CartPage(page);

        await page.goto('/products');

        await product.viewFirstProduct();

        await product.updateQuantity('3');

        await product.addProductDetailToCart();

        await product.clickViewCart();

        await expect(cart.productQuantity).toContainText('3');
    }
);