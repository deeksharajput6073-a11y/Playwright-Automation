const { test } = require('@playwright/test');
const fs = require('fs');
const LoginPage = require('../../pages/LoginPage');
const CheckoutPage = require('../../pages/CheckoutPage');
const PaymentPage = require('../../pages/PaymentPage');

test(
    'Payment Test',
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

        const pay = new PaymentPage(page);

        await page.goto('/');

        // Login
        await login.login(
            userData.email,
            userData.password
        );

        // Add product to cart
        await checkout.addProductToCart();

        // Go to cart
        await checkout.goToCart();

        // Proceed checkout
        await checkout.proceedToCheckout();

        // Add comment
        await checkout.addComment('Automation Order Test');

        // Click Place Order
        await checkout.clickPlaceOrder();

        // Payment
        await pay.makePayment(
            'Test',
            '4111111111111111',
            '123',
            '12',
            '2028'
        );
    }
);