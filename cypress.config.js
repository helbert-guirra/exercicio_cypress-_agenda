// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://ebac-agenda-contatos-tan.vercel.app/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 10000, // 10 segundos
    screenshotOnRunFailure: true,
    video: false, // deixe true se quiser gravar
    setupNodeEvents(on, config) {
    }
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/relatorio",
    overwrite: true,
    html: true,
    json: false,
    timestamp: "ddmmyyyy_HHMMss",
  }
});
