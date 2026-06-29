import { ApiClient } from './ApiClient.js';
import { ENDPOINTS } from './endpoints.js';

export class ProductAPI {

    constructor() {
        this.apiClient = new ApiClient();
    }

    async getProducts() {

        const context = await this.apiClient.getContext();

        return await context.get(
            ENDPOINTS.PRODUCTS
        );
    }

    async getBrands() {

        const context = await this.apiClient.getContext();

        return await context.get(
            ENDPOINTS.BRANDS
        );
    }
}