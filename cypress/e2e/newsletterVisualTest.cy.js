/// <reference types="cypress" />

/* COMENTARIO SOBRE MEDIDAS COMPARADAS CON FIGMA:
* EL ESPACIADO ENTRE EL TÍTULO Y BAJADA ES DE 16PX EN LUGAR DE 8PX MÁS
* EL TAMAÑO DE FUENTE DEL TÍTULO ES DE 22PX EN LUGAR DE 24PX 
*/
describe('Portada TN Newsletter', () => {
    it('TN portada newsletter', () => {
        cy.viewport('macbook-15')
        cy.visit('https://tn.com.ar/newsletters/').wait(4000)
        cy.url().should('contain', '/newsletters/')
        cy.title().should('contain', 'TN')

        cy.get('.heading.full-width-all.dark_brick.align_center.newsletters')
        .should('have.css', 'padding-top', '48px')
        .and('have.css', 'padding-bottom', '32px')

        cy.get('h1').should('be.visible').should('have.css', 'margin-top', '32px')
        .and('have.css', 'margin-bottom', '8px')

        cy.get('h2').first().should('be.visible').should('have.css', 'margin-bottom', '96px')

        cy.get('.newsletter-group').first().should('be.visible')
        .find('.newsletter-item').eq(1)
        .should('have.css', 'margin-right', '40px')
        .and('have.css', 'margin-bottom', '48px')
        .and('have.css', 'margin-left', '40px')

        // Chequeo de valores de componentes internos
        cy.get('.responsive-image').first().should('be.visible').should('have.css', 'width', '314px')

        cy.get('.card__body').first().should('be.visible').should('have.css', 'padding-top', '16px')
        .and('have.css', 'padding-right', '8px')
        .within( () => {
            // Validaciones para los elementos internos del card-body
            cy.get('h2').should('exist').and('have.css', 'margin-bottom', '8px')
            .and('have.css', 'font-family', '"TT Interface"')
            .and('have.css', 'font-size', '22px')
            .and('have.css', 'font-weight', '700')

            cy.get('p').should('exist').and('have.css', 'margin-top', '8px')
            .and('have.css', 'font-family', 'Roboto')
            .and('have.css', 'font-size', '16px')
            .and('have.css', 'font-weight', '400')
        })

        cy.get('.newsletter-group').first().should('be.visible')
        .find('.newsletter-item').first().should('be.visible')
        .find('button').should('be.visible').and('contain', 'Suscribirme')
        .and('have.css', 'margin-top', '24px')
        .and('have.css', 'border-top-width', '2px')
        .and('have.css', 'border-right-width', '2px')
        .and('have.css', 'border-bottom-width', '2px')
        .and('have.css', 'border-left-width', '2px')
        .and('have.css', 'color', 'rgb(13, 108, 205)')


        cy.cerrarPublicidadITT()
        cy.wait(3000)

        cy.manejarPopupNoticias()
        cy.wait(3000)
        
        // CAPTURA DE PANTALLA SIMPLE PARA PERCY - NO PARECE FUNCIONAR EL NONE DE LOS AD
        cy.percySnapshot('5-Page Newsletters sin anuncios ni popups?', {
            percyCSS: `#adzone_ittIcon_ad-slot-itt { display: none; }
            .adzone_itt_close_button { display: none; }
            .tn-popup-container { visibility: hidden; }`
        });

    })
})