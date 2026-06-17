class BasePage {

    constructor(page) {
        this.page = page;
    }

    async launchURL() {
        await this.navigate('/');
    }

    async navigate(path = '/', options = {}) {
        await this.page.goto(path, {
            waitUntil: 'load',
            timeout: 30000,
            ...options
        });
    }

    async waitForVisible(locator, timeout = 10000) {
        await locator.waitFor({
            state: 'visible',
            timeout
        });
    }

    async waitForHidden(locator, timeout = 10000) {
        await locator.waitFor({
            state: 'hidden',
            timeout
        });
    }

    async click(locator, options = {}) {
        await this.waitForVisible(locator);
        await locator.click(options);
    }

    async fill(locator, value, options = {}) {
        await this.waitForVisible(locator);
        await locator.fill(value, options);
    }

    async wait(milliseconds) {
        await this.page.waitForTimeout(milliseconds);
    }

    async getText(locator) {
        await this.waitForVisible(locator);
        return await locator.textContent();
    }

    async handlePopup(selector = 'text=Close', timeout = 3000) {
        try {
            const closeButton = this.page.locator(selector).first();

            if (await closeButton.isVisible({ timeout })) {
                await closeButton.click();
            }
        } catch (error) {
            // Popup did not appear.
        }
    }
}

module.exports = BasePage;