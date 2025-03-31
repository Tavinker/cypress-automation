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
    cy.invalid_login() //comando personalizado de login criado no commands.js
    cy.get('.error-message-container').should('contain', 'Epic sadface: Username and password do not match any user in this service')
})

it('05: validando tentativa de login com usuário bloqueado', function() {
    cy.locked_login()
    cy.get('.error-message-container').should('contain', 'Epic sadface: Sorry, this user has been locked out.')
})

it.only('06: validando login com conta de usuário com problemas e checando redirecionamento para página About', function() {
    cy.problem_login()
    cy.get('#react-burger-menu-btn').click()
    cy.get('#about_sidebar_link').click()
    cy.wait(2000)
    cy.get('#about_sidebar_link').click(); // Clica no link que redireciona para o domínio externo

    // Usa cy.origin para interagir com o domínio https://saucelabs.com
    cy.origin('https://saucelabs.com', () => {
    cy.url().should('include', 'https://saucelabs.com/error/404'); // Verifica a URL no domínio externo
    });

    //NÃO É NADA DISSO ----> RESOLVER ESSE ERRO POSTERIORMENTE!

})


})



