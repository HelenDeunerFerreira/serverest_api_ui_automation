const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrlAPI: "https://serverest.dev",
        baseURLUI: "https://front.serverest.dev",
        supportFile: "cypress/support/e2e.js",
    },
});