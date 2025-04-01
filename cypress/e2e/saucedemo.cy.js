/// <reference types="Cypress" />

describe('Sauce Demo', function() {
    const THREE_SECONDS_IN_MS = 3000

    beforeEach(function() {
        cy.visit('https://www.saucedemo.com/')
    })


//SEÇÃO DOS EXERCÍCIOS 1 - Login    
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

it('06: validando login com conta de usuário com problemas e checando redirecionamento para página About', function() {
    cy.problem_login()
    cy.get('#react-burger-menu-btn').click()
    cy.get('#about_sidebar_link').click()
    cy.wait(2000)
    cy.get('#about_sidebar_link').click(); // Clica no link que redireciona para o domínio externo

    // // Usa cy.origin para interagir com o domínio https://saucelabs.com
    // cy.origin('https://saucelabs.com', () => {
    // cy.url().should('include', 'https://saucelabs.com/error/404'); // Verifica a URL no domínio externo
    // });

    //NÃO É NADA DISSO ACIMA ----> RESOLVER ESSE ERRO POSTERIORMENTE!
})







//SEÇÃO DOS EXERCÍCIOS 1 - Página de Produtos 
it('07: validando se os 6 produtos estão sendo exibidos corretamente após o login', function() {
    cy.login()
    cy.get('#item_4_title_link').should('contain', 'Sauce Labs Backpack')
    cy.get('#item_0_title_link').should('contain', 'Sauce Labs Bike Light')
    cy.get('#item_1_title_link').should('contain', 'Sauce Labs Bolt T-Shirt')
    cy.get('#item_5_title_link').should('contain', 'Sauce Labs Fleece Jacket')
    cy.get('#item_2_title_link').should('contain', 'Sauce Labs Onesie')
    cy.get('#item_3_title_link').should('contain', 'Test.allTheThings() T-Shirt (Red)')
})

it('08: validando se ao adicionar um item no carrinho, o número é alterado para 1', function(){
    cy.login()
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#shopping_cart_container').should('contain', '1')
})

it('09: validando se ao remover o item do carrinho, o numero 1 é removido também', function(){
    cy.login()
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#shopping_cart_container').should('contain', '1')

    cy.get('#shopping_cart_container').click()
    cy.get('#item_4_title_link').should('contain', 'Sauce Labs Backpack')
    cy.get('#remove-sauce-labs-backpack').click()
    cy.get('#shopping_cart_container').should('have.value', '')
})

it.only('10: Validando se selecionando o filtro (low to high) o produto com menor valor é exibido primeiro e o de maior valor, por último', function(){
    cy.login()
    cy.get('.select_container').click()
    cy.get('.active_option').contains('Price (low to high)').click()

    //realizar desenvolvimento deste caso de teste amanhã!
})

})



