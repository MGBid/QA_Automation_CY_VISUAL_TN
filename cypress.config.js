const { defineConfig } = require("cypress");
// Archivo: cypress.config.js
require('dotenv').config();

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true,
    reportPageTitle: 'Reporte de Pruebas Cypress Visual',
    embeddedScreenshots: true,
    inlineAssets: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
