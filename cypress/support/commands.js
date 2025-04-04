// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//comandos personalizados
Cypress.Commands.add('login', function(){
    cy.wait(2000)
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
})

Cypress.Commands.add('invalid_login', function(){
    cy.wait(2000)
    cy.get('[data-test="username"]').type('invalid_user')
    cy.get('[data-test="password"]').type('invalid_pass')
    cy.get('#login-button').click()
})

Cypress.Commands.add('locked_login', function(){
    cy.wait(2000)
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
})

Cypress.Commands.add('problem_login', function(){
    cy.wait(2000)
    cy.get('[data-test="username"]').type('problem_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
})