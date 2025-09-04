/// <reference types="cypress" />

describe('Home Page TN', () => {
    it('TN portada principal', () => {
        cy.viewport('macbook-15')
        cy.visit('https://tn.com.ar').wait(4000)
        cy.url().should('contain', 'tn.com.ar')
        cy.title().should('contain', 'Últimas Noticias de Argentina y del Mundo | Todo Noticias')

        cy.cerrarPublicidadITT()
        cy.wait(3000)

        cy.manejarPopupNoticias()
        cy.wait(3000)
        

        cy.percySnapshot('1-HOME TN sin anuncios ni popups?', {
            percyCSS: `#adzone_ittIcon_ad-slot-itt { display: none; }
            .adzone_itt_close_button { display: none; }
            .tn-popup-container { visibility: hidden; }`
        });

    })
})