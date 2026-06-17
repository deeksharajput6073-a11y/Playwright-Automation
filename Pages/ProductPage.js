const BasePage = require('./BasePage');

class ProductPage extends BasePage {

    constructor(page) {
        super(page);

        // Product Details
        this.firstViewProduct = page.locator("a[href*='/product_details/']").first();
        this.productInfo = page.locator('.product-information');
        // Add To Cart
        this.firstAddToCartBtn = page.locator('.features_items .productinfo .add-to-cart').first();
        // View Cart Popup Button
        this.viewCartBtn = page.getByRole('link', { name: 'View Cart' });
        // Search Product
        this.searchInput = page.locator('#search_product');
        this.searchButton = page.locator('#submit_search');
        this.searchedProductsText = page.locator('h2.title.text-center');
        // Category Filter
        this.womenCategory = page.locator("a[href='#Women']");
        this.womenDressCategory = page.locator("a[href='/category_products/1']");
        this.categoryTitle = page.locator('.title.text-center');
        // Quantity Update
        this.quantityInput = page.locator('#quantity');
        this.addToCartDetailBtn = page.locator('button.cart');
        // Recommended Items
        this.recommendedSection = page.locator('.recommended_items');
        this.recommendedAddToCart = page.locator('.recommended_items .productinfo .add-to-cart').first();
        // Remove Cart
        this.deleteProductButton = page.locator('.cart_quantity_delete');
        this.emptyCartText = page.getByText('Cart is empty');
    }

    // View Product Details
    async viewFirstProduct() {

        await Promise.all([
            this.page.waitForURL(/product_details/),
            this.firstViewProduct.click()
        ]);
    }

    // Add Product To Cart
    async addFirstProductToCart() {

        await this.firstAddToCartBtn.scrollIntoViewIfNeeded();

        await this.firstAddToCartBtn.click();

        await this.page.waitForTimeout(2000);
    }

    // Click View Cart
    async clickViewCart() {

        await this.viewCartBtn.click();
    }

    // Search Product
    async searchProduct(productName) {

        await this.searchInput.fill(productName);

        await this.searchButton.click();
    }

    // Category Filter
    async selectWomenCategory() {

        await this.womenCategory.click();

        await this.womenDressCategory.click();
    }

    // Update Quantity
    async updateQuantity(quantity) {

        await this.quantityInput.clear();

        await this.quantityInput.fill(quantity);
    }

    // Add Product Detail To Cart
    async addProductDetailToCart() {

        await this.addToCartDetailBtn.click();

        await this.page.waitForTimeout(2000);
    }

    // Scroll To Recommended Items
    async scrollToRecommended() {

        await this.recommendedSection.scrollIntoViewIfNeeded();
    }

    // Add Recommended Item
    async addRecommendedItem() {

        await this.recommendedAddToCart.scrollIntoViewIfNeeded();

        await this.recommendedAddToCart.click();
    }

    // Remove Product
    async removeProduct() {

        await this.deleteProductButton.click();
    }
}

module.exports = ProductPage;