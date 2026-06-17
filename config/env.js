const dotenv = require('dotenv');

// Load environment file dynamically
dotenv.config({
    path: process.env.ENV_FILE || '.env.qa'
});

const config = {
    baseURL: process.env.BASE_URL,
    env: process.env.ENV,
    email: process.env.EMAIL,
    password: process.env.PASSWORD
};

console.log('Environment Loaded:', config.env);
console.log('Base URL:', config.baseURL);

module.exports = config;