/// <reference types="cypress" />

// TODO: SE PUEDEN AGREGAR ASSERTIONS SOBRE EL CSS PARA MAYOR COBERTURA

describe('Portada TN JUEGOS', () => {
  it('portada TN JUEGOS captura primer brick container y captura completa', () => {
    cy.viewport('macbook-15')
    cy.visit('https://tn.com.ar/juegos/').wait(3000)
    cy.url().should('contain', '/juegos/')
    cy.title().should('contain', 'TN Juegos')

    cy.cerrarPublicidadITT()
    cy.wait(3000)

    cy.manejarPopupNoticias()

    cy.get('.brick-cards.brick_40')
    .should('contain', 'Rompecabezas')
    .and('contain', 'Crucigrama')
    .and('contain', 'Letras Locas')
    .and('contain', 'Lluvia de objetos')

    cy.get('.brick-cards.brick_40').within( () => {
      cy.get('a').first().should('exist').should('have.css', 'padding', '16px')
    })


    cy.percyAndMochawesomeSnapshot('2.1-TN JUEGOS Brick Cards de Juegos', {
      capture: 'viewport',
      overwrite: true
    })

    cy.percyAndMochawesomeSnapshot('2.2-Captura Completa TN JUEGOS')
    
    
  })
})