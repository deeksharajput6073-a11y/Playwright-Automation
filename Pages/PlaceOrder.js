const { test, expect } = require('@playwright/test');
const fs = require('fs');
const LoginPage = require('../../pages/LoginPage');
const CheckoutPage = require('../../pages/CheckoutPage');
const PaymentPage = require('../../pages/PaymentPage');
const data = require('../../fixtures/testData');

test(
    'Place Order Test',
    async ({ page }) => {

        const userData = JSON.parse(fs.readFileSync('./fixtures/userData.json', 'utf-8'));
        const login = new LoginPage(page);
        const checkout = new CheckoutPage(page);
        const pay = new PaymentPage(page);

        // Launch URL
        await page.goto('https://automationexercise.com/');
        // Login
        await login.login(userData.email, userData.password);

        console.log('Login Successful');

        // Add Product
        await checkout.addProductToCart();

        console.log('Product Added To Cart');

        // Go to Cart
        await checkout.goToCart();

        // Proceed Checkout
        await checkout.proceedToCheckout();

        console.log('Checkout Opened');

        // Add Comment
        await checkout.addComment(data.Checkout.comment);

        // Place Order
        await checkout.clickPlaceOrder();

        console.log('Payment Page Opened');

        // Payment
        await pay.makePayment(
            data.Payment.name,
            data.Payment.cardNumber,
            data.Payment.cvc,
            data.Payment.month,
            data.Payment.year
        );

        console.log('Payment Successful');

        // Validation
        await expect(page.locator("b:has-text('Order Placed!')")).toBeVisible();
    }
);