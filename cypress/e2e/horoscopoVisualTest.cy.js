/// <reference types="cypress" />

/* COMENTARIO 
* 
*/
describe('Portada TN Horóscopo', () => {
    it('TN portada horóscopo', () => {
        cy.viewport('macbook-15')
        cy.visit('https://tn.com.ar/horoscopo/').wait(4000)
        cy.url().should('contain', '/horoscopo/')
        cy.title().should('contain', 'Últimas noticias sobre Horóscopo | TN')

        
        cy.get('h1').should('be.visible')

        cy.get('h2').first().should('be.visible')


        cy.cerrarPublicidadITT()
        cy.wait(3000)

        cy.manejarPopupNoticias()
        cy.wait(3000)
        
        // CAPTURA DE PANTALLA SIMPLE PARA PERCY - NO PARECE FUNCIONAR EL NONE DE LOS AD
        cy.percyAndMochawesomeSnapshot('6.1-Page Horóscopo');

        cy.percySnapshot('6.2- Page Horóscopo con percySnapshot')

    })
})