it ('example cypress website automation', () => {

    cy.visit('https://example.cypress.io/')
    cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)')
        .click()
    cy.get('#query-btn')
        .should('contain', 'Button')
        .and('have.class', 'query-btn')
        .and('be.visible')
        .and('be.enabled')
        .click()
    cy.scrollTo('bottom')
    cy.scrollTo('top')
    cy.get('.navbar-brand')
        .should('contain', 'cypress.io')
        .click()
    cy.get('[data-toggle = "dropdown"]')
        .should('contain', 'Commands')
        .click()
    cy.contains('Querying')
        .click()

    //.within(), to finding elelments within a specific DOM element
    cy.get('.well').eq(3).within(() => {
        cy.get('#inputName')
            .should('have.attr', 'placeholder', 'Name')
            .should('have.attr', 'type', 'text')
            .should('class', 'form-control')
            .scrollIntoView()
            .type('deepesh')
    })

    //.within(), to finding elelments within a specific DOM element
    cy.get('.query-form').within(() => {
        cy.get('#inputEmail')
            .should('have.attr', 'placeholder', 'Email')
            .should('have.attr', 'type', 'text')
            .should('class', 'form-control')
            .scrollIntoView() //scroll the element to view
            .type('deepesh@test.com')
        cy.get('#inputPassword')
            .should('have.attr', 'placeholder', 'Password')
            .should('have.attr', 'type', 'text')
            .should('class', 'form-control')
            .scrollIntoView() //scroll the element to view
            .type('qwerty123456')
    })

    cy.get('.btn.btn-large')
        .should('id', 'main')
        .should('have.attr', 'data-cy', 'submit')
        .should('have.attr', 'role', 'button')
        .should('have.attr', 'name', 'submission')
        .should('contain', 'Submit')
        .scrollIntoView() //scroll the element to view
        .click()

    //working with a list using .within() 
    cy.get('.query-ul').within(() => {
        cy.get('li')
            .eq(2)
            .should('contain', 'shoe')
    })
    cy.get('.query-list').within(() => {
        cy.get('li')
            .should('contain', 'bananas')
    })
    cy.get('.query-button').within(() => {
        cy.get('.btn.btn-default')
            .click()
    })

})