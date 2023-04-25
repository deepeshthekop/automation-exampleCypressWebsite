it ("example cypress website automation-2", () => {

    cy.visit('https://example.cypress.io/')
    cy.get('.navbar-collapse.collapse').within(() => {
        cy.contains('GitHub')
        .click()
    })
    cy.origin('https://github.com', () => {
        cy.get('#readme').within(() => {
            cy.contains('Follow these instructions to install and write tests in Cypress.')
            .click()
        })
    })

})