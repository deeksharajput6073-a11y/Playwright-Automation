import { test, expect } from '@playwright/test';
import { ProductAPI } from '../../api/ProductAPI.js';

test('Verify Product List API', async () => {

    const productAPI = new ProductAPI();

    const response = await productAPI.getProducts();

    console.log("Status:", response.status());
    console.log("URL:", response.url());

    const body = await response.text();

    console.log(body);

    expect(response.status()).toBe(200);
});