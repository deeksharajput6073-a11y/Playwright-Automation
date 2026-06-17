const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');

class HomePage extends BasePage {

    constructor(page) {
        super(page);

        // Logo
        this.logo = page.locator("img[alt='Website for automation practice']");

        // Navbar menus
        this.homeMenu = page.getByRole('link', { name: 'Home' });
        this.productsMenu = page.locator("header a[href='/products']");
        this.cartMenu = page.locator("header a[href='/view_cart']").first();
        this.signupLoginMenu = page.locator("header a[href='/login']");
        this.contactUsMenu = page.locator("header a[href='/contact_us']");
        this.testCasesMenu = page.locator("header a[href='/test_cases']");

        this.navbarMenus = [
            this.homeMenu,
            this.productsMenu,
            this.cartMenu,
            this.signupLoginMenu,
            this.contactUsMenu,
            this.testCasesMenu
        ];

        // Footer
        this.footer = page.locator('#footer');
        this.subscriptionText = page.locator("h2:has-text('Subscription')");
    }

    async verifyNavbarMenus() {
        for (const menu of this.navbarMenus) {
            await expect(menu).toBeVisible();
        }
    }

    async verifyHomePageContents() {
        await expect(this.logo).toBeVisible();
        await this.verifyNavbarMenus();
        await this.footer.scrollIntoViewIfNeeded();
        await expect(this.subscriptionText).toBeVisible();
        await expect(this.footer).toBeVisible();
    }

    async clickSignupLogin() {
        await this.click(this.signupLoginMenu);
    }

    async clickProducts() {
        await this.click(this.productsMenu);
    }

    async clickCart() {
        await this.click(this.cartMenu);
    }
}

module.exports = HomePage;