/// <reference types="cypress" />

describe('Portada TN SHOW', () => {
  it('portada TN SHOW captura primer brick container y captura completa', () => {
    cy.viewport('macbook-15')
    cy.visit('https://tn.com.ar/show/').wait(3000)
    cy.url().should('contain', '/show/')
    cy.title().should('contain', 'TN Show, las últimas noticias y videos sobre el espectáculo| TN')

    cy.cerrarPublicidadITT()
    cy.wait(3000)

    cy.manejarPopupNoticias()

    cy.get('.brick-container').first().within( () => {
      cy.get('.brick_one.brick_mayor.brick_main').should('exist')
      .should('have.css', 'margin-right', '16px')
      cy.get('.brick__two-stories.brick-direction-column.brick_menor').should('exist')
    })
    

    cy.percyAndMochawesomeSnapshot('3.1-TN SHOW Primer Brick Container', {
      capture: 'viewport',
      overwrite: true
    })

    cy.percyAndMochawesomeSnapshot('3.2-Captura Completa TN SHOW')
    
    
  })
})