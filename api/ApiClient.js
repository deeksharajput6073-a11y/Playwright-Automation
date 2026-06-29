import { request } from '@playwright/test';

export class ApiClient {

    async getContext() {

        return await request.newContext({
            baseURL: 'https://automationexercise.com/api'
        });
    }
}