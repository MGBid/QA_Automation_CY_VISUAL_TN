const { defineConfig } = require("cypress");
// Archivo: cypress.config.js
require('dotenv').config();

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome-report',
    overwrite: false,
    html: true,
    json: true,
    timestamp: 'mm-dd-yyyy_HH-MM-ss',
    reportPageTitle: 'Reporte de Pruebas Cypress Visual',
    embeddedScreenshots: true,
    inlineAssets: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
