/// <reference types="cypress" />

/* COMENTARIO 
* 
*/
describe('Listado TN Turismo', () => {
    it('TN Listado Turismo', () => {
        cy.viewport('macbook-15')
        cy.visit('https://tn.com.ar/turismo/').wait(4000)
        cy.url().should('contain', '/turismo/')
        cy.title().should('contain', 'Últimas noticias sobre Turismo | TN')

        
        cy.get('h1').should('be.visible')


        cy.cerrarPublicidadITT()
        cy.wait(3000)

        cy.manejarPopupNoticias()
        cy.wait(3000)
        
        // CAPTURA DE PANTALLA SIMPLE PARA PERCY - NO PARECE FUNCIONAR EL NONE DE LOS AD
        cy.percyAndMochawesomeSnapshot('7.1-Listado Turismo');

        cy.percySnapshot('7.2- Listado Turismo con percySnapshot')

    })
})