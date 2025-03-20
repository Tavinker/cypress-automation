/// <reference types="Cypress" />

describe('Sauce Demo', function() {
    const THREE_SECONDS_IN_MS = 3000

    beforeEach(function() {
        cy.visit('https://www.saucedemo.com/')
    })

it('01: validando se o título da página é "Swag Labs"', function() {
    cy.title().should('be.equal', 'Swag Labs')
})

it('02: validando se o login é realizado com sucesso com credenciais válidas', function(){
    cy.login() //comando personalizado criado no commands.js
})

it('03: checando alteração de URL após o login bem sucedido', function(){
    cy.login()
    cy.url().should('include', 'https://www.saucedemo.com/inventory.html')
})

it('04: validando tentativa de login com credenciais inválidas', function() {
    cy.invalid_login() //comando personalizado criado no commands.js

    //proximo passo: criar validação neste mesmo caso de testes para checar a mensagem de erro quando forneço as credenciais inválidas
})


})



