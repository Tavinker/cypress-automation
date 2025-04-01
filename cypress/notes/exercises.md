📌 Seção 1 - Login
1️⃣ Valide o título da página de login.
Verifique se o título da página (cy.title()) corresponde ao esperado.

2️⃣ Realize login com credenciais corretas e valide a navegação para a página de produtos.
Insira standard_user no campo usuário.
Insira secret_sauce no campo senha.
Clique no botão de login e verifique se a URL mudou para /inventory.html.

3️⃣ Valide erro ao tentar logar com credenciais inválidas.
Utilize um usuário/senha errados.
Verifique se uma mensagem de erro aparece na tela.

4️⃣ Teste diferentes tipos de usuários bloqueados.
Tente logar com locked_out_user e valide a mensagem de erro.
Tente logar com problem_user e veja se o comportamento do site muda (pode testar os produtos).






📌 Seção 2 - Página de Produtos
5️⃣ Valide se a lista de produtos está sendo carregada corretamente.
Após login, verifique se há exatamente 6 produtos exibidos na página (cy.get('.inventory_item')).

6️⃣ Adicione um item ao carrinho e valide que o número do carrinho foi atualizado.
Clique no botão Add to cart de um produto.
Verifique se o número no ícone do carrinho foi atualizado para 1.

7️⃣ Remova um item do carrinho e valide a atualização.
Após adicionar um produto, clique no botão Remove.
Verifique se o número do carrinho sumiu ou foi reduzido.

8️⃣ Teste a ordenação dos produtos pelo dropdown.
Selecione a ordenação por Price (low to high).
Valide se o primeiro item tem o menor preço e o último tem o maior.






📌 Seção 3 - Carrinho de Compras
9️⃣ Adicione múltiplos itens ao carrinho e verifique o número no ícone do carrinho.
Adicione três produtos e valide se o número no ícone do carrinho é 3.

🔟 Valide que os itens adicionados aparecem corretamente na página do carrinho.
Após adicionar produtos, clique no ícone do carrinho.
Verifique se os produtos certos estão listados.

1️⃣1️⃣ Teste a remoção de itens diretamente no carrinho.
Acesse o carrinho.
Remova um item e valide que ele não está mais listado.






📌 Seção 4 - Checkout
1️⃣2️⃣ Prossiga para o checkout e valide o preenchimento obrigatório dos campos.
Clique em Checkout.
Tente prosseguir sem preencher os campos e valide a mensagem de erro.

1️⃣3️⃣ Preencha os campos corretamente e valide a navegação para a página de resumo.
Insira First Name, Last Name e Zip Code.
Avance para a próxima etapa e valide que os produtos do carrinho aparecem no resumo.

1️⃣4️⃣ Finalize a compra e valide a mensagem de sucesso.
Clique em Finish e valide a mensagem "Thank you for your order!".






📌 Seção 5 - Testes Avançados
1️⃣5️⃣ Teste a responsividade da aplicação.
Utilize cy.viewport() para simular um dispositivo mobile.
Valide se os elementos são exibidos corretamente.

1️⃣6️⃣ Intercepte uma requisição e valide o payload da API.
Utilize cy.intercept() para monitorar a requisição ao /inventory.json.
Verifique se a resposta contém os produtos esperados.