/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.viewport('macbook-15')
    cy.visit('https://tn.com.ar/envivo/24hs/').wait(3000)
    cy.url().should('contain', '/envivo/24hs')
    cy.title().should('contain', 'TN en vivo las 24 horas | Todo Noticias')
    
    // Comprueba que el Brick Live contenga las clases brick__live & full-width
    cy.get('.brick__live.full-width').should('have.class', 'brick__live').and('have.class', 'full-width')

    // Comprueba estilo de H1
    cy.get('h1').should('exist').should('have.css', 'font-family', '"TT Interface"').percySnapshot('Captura Elemento H1')

    cy.get('.brick__live.full-width').should('exist').percySnapshot('Captura de Bloque En Vivo')
    
    
  })
})