const { test, expect } = require('@playwright/test');
const fs = require('fs');
const LoginPage = require('../../pages/LoginPage');
const CheckoutPage = require('../../pages/CheckoutPage');
const PaymentPage = require('../../pages/PaymentPage');
const data = require('../../fixtures/testData');

test(
    'Place Order Test',
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

        await login.login(
            userData.email,
            userData.password
        );

        await checkout.addProductToCart();

        await checkout.goToCart();

        await checkout.proceedToCheckout();

        await checkout.addComment(data.Checkout.comment);

        await checkout.clickPlaceOrder();

        await pay.makePayment(
            data.Payment.name,
            data.Payment.cardNumber,
            data.Payment.cvc,
            data.Payment.month,
            data.Payment.year
        );

        await expect(page).toHaveURL(/payment_done/);
    }
);