/// <reference types="cypress" />

describe('Portada TN JUEGOS', () => {
  it('portada TN JUEGOS captura primer brick container y captura completa', () => {
    cy.viewport('macbook-15')
    cy.visit('https://tn.com.ar/juegos/').wait(3000)
    cy.url().should('contain', '/juegos/')
    cy.title().should('contain', 'TN Juegos')

    cy.cerrarPublicidadITT()
    cy.wait(3000)

    cy.manejarPopupNoticias()

    cy.get('.brick-cards brick_40').should('contain', 'Rompecabezas').and('contain', 'Crucigrama')
    .and('contain', 'Letras Locas').and('contain', 'Lluvia de objetos')
    cy.percyAndMochawesomeSnapshot('Captura TN JUEGOS Brick Cards de Juegos', {
      capture: 'viewport',
      overwrite: true
    })

    cy.percyAndMochawesomeSnapshot('Captura Completa TN JUEGOS')
    
    
  })
})