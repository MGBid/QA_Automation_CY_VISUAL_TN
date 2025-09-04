// **************************************************************************************
// This example commands.js shows you how to create various custom commands and overwrite
// existing commands.
// https://on.cypress.io/custom-commands
// **************************************************************************************
Cypress.Commands.add('percyAndMochawesomeSnapshot', (name, options = {}) => {
    // Tomar captura local para el reporte Cypress/Mochawesome
    cy.screenshot(name, options)

    // Tomar captura para Percy (análisis visual) - Captura completa
    cy.percySnapshot(name)
})

Cypress.Commands.add('cerrarPublicidadITT', () => {
    cy.get('body').then( ($body) => {
            if( $body.find('#adzone_ittIcon_ad-slot-itt').length > 0 ) {
                cy.get('#adzone_ittIcon_ad-slot-itt').click( { force: true })
                Cypress.log({
                    name: 'AD Check',
                    message: '✅ ¡ENCONTRADO y CERRADO! Se encontró el slot de publicidad.',
                })              
            } else {
                Cypress.log({
                    name: 'AD Check',
                    message: '❌ ¡NO ENCONTRADO! No se encontró el slot de publicidad.',
                })
            }
        })
})

Cypress.Commands.add('manejarPopupNoticias', () => {
    cy.get('body').then( ($body) => {
      // Busco si el elemento normal-slidedown existe en el body
      if($body.find('#normal-slidedown').length > 0) {
        // El elemento aparece...Busco el botón Más tarde
        cy.get('#normal-slidedown #onesignal-slidedown-cancel-button', { timeout: 5000 }).click()
        cy.log('Se detectó el elemento "normal-slidedown" - Hacemos click en "Más tarde".')
        Cypress.log({
          name: 'Popup Noticias',
          displayName: 'POPUP',
          message: '✅ ¡CERRADO! Se hizo clic en el botón "Más tarde" del popup.'
        })
      } else {
        cy.log('El elemento "normal-slidedown" NO SE MOSTRÓ!!! ')
        Cypress.log({
          name: 'Popup Noticias',
          displayName: 'POPUP HIDE',
          message: '❌ ¡NO ENCONTRADO! El popup de noticias no apareció.'
        })
      }
    })
})


// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })