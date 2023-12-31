const { defineConfig } = require('cypress');
const dotenv = require('dotenv');
dotenv.config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.PROD_URL,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
