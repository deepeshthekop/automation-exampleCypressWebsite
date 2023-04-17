it('cypress website automation', () => {
    
    cy.visit('https://cypress.io/')
    cy.contains('Doc')
        .click()
    //forcing page to not open in a new tab
    cy.contains('Best practices')
        .invoke('removeAttr', 'target')
        .click()
    //opening a link from within a div
    cy.get('.table-of-contents > :nth-child(2) > a')
        .should('have.attr', 'href')
        .get('#Selecting-Elements')
        .click()
    cy.get(':nth-child(1) > [href="/examples/recipes"]')
        .click()
})