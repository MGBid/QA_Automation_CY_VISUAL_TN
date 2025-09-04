/// <reference types="cypress" />

describe('Portada EN VIVO', () => {
  it('captura de viewport Brick Vivo y captura pantalla completa', () => {
    cy.viewport('macbook-15')
    cy.visit('https://tn.com.ar/envivo/24hs/').wait(3000)
    cy.url().should('contain', '/envivo/24hs')
    cy.title().should('contain', 'TN en vivo las 24 horas | Todo Noticias')

    // Si muestra el normal-slidedown tenemos que skipearlo
    cy.get('body').then( ($body) => {
      // Busco si el elemento normal-slidedown existe en el body
      if($body.find('#normal-slidedown').length > 0) {
        // El elemento aparece...Busco el botón Más tarde
        cy.log('Se detectó el elemento "normal-slidedown" - Hacemos click en "Más tarde".')
        Cypress.log({
          name: 'Popup Handling',
          displayName: 'POPUP',
          message: 'Se detectó el pop-up de suscripción :('
        })
        cy.get('#normal-slidedown #onesignal-slidedown-cancel-button').click()
      } else {
        cy.log('El elemento "normal-slidedown" NO SE MOSTRÓ!!! ')
        Cypress.log({
          name: 'Popup Handling',
          displayName: 'POPUP HIDE',
          message: 'El pop-up de suscripción NO SE MOSTRÓ!! :)'
        })
      }
    })

    
    // Comprueba que el Brick Live contenga las clases indicadas
    cy.get('.brick__live.full-width').should('have.class', 'brick__live')
    .and('have.class', 'full-width').scrollIntoView()

    // Comprueba estilo de H1
    cy.get('h1').should('exist').should('be.visible').should('have.css', 'font-family', '"TT Interface"')
    // Espera para que desaparezca el ad-slot-itt
    cy.wait(4000)
    cy.percyAndMochawesomeSnapshot('4.1-VIVO Captura Viewport H1', {
      capture: 'viewport',
      overwrite: true
    })

    cy.get('.brick__live.full-width').should('exist').should('be.visible').scrollIntoView()
    .percyAndMochawesomeSnapshot('4.2-Captura Completa Bloque En Vivo')
    
    
  })
})