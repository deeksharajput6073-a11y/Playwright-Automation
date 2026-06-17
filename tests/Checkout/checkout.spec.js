const { test } = require('@playwright/test');
const fs = require('fs');
const LoginPage = require('../../pages/LoginPage');
const CheckoutPage = require('../../pages/CheckoutPage');

test(
    'Checkout Validation',
    async ({ page }) => {

        const userData =
            JSON.parse(
                fs.readFileSync(
                    './fixtures/userData.json',
                    'utf-8'
                )
            );

        const login = new LoginPage(page);

        const checkout = new CheckoutPage(page);

        await page.goto('/');

        await login.login(
            userData.email,
            userData.password
        );

        await checkout.addProductToCart();

        await checkout.goToCart();

        await checkout.proceedToCheckout();

        await checkout.verifyAddressVisible();
    }
);