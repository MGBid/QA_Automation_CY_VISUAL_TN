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

    cy.get('.brick-container').first().should('contain', 'Evangelina Anderson estaría saliendo con un hombre de 34 años:')

    cy.percyAndMochawesomeSnapshot('Captura TN SHOW Primer Brick Container', {
      capture: 'viewport',
      overwrite: true
    })

    cy.percyAndMochawesomeSnapshot('Captura Completa TN SHOW')
    
    
  })
})