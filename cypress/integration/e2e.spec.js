/// <reference types="cypress" />

import EnderecoPage from '../support/page-objects/endereco-page'
import ProdutoPage from '../support/page-objects/produto-page'
import PagamentoPage from '../support/page-objects/pagamento-page'

const produtos = require('../fixtures/produtos.json')
const dadosEndereco = require('../fixtures/endereco.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    
        ProdutoPage.addProduto(produtos[0].produto, produtos[0].quantidade, produtos[0].tamanho, produtos[0].cor)
        ProdutoPage.addProduto(produtos[1].produto, produtos[1].quantidade, produtos[1].tamanho, produtos[1].cor)
        ProdutoPage.addProduto(produtos[2].produto, produtos[2].quantidade, produtos[2].tamanho, produtos[2].cor)
        ProdutoPage.addProduto(produtos[3].produto, produtos[3].quantidade, produtos[3].tamanho, produtos[3].cor)
        
        let quantidadeCarrinho = produtos[0].quantidade + produtos[1].quantidade + produtos[2].quantidade + produtos[3].quantidade

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidadeCarrinho)

        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        
        cy.get('tbody > :nth-child(1) > .product-name').should('contain', produtos[0].produto + ' - ' + produtos[0].tamanho + ', ' + produtos[0].cor)
        cy.get(':nth-child(1) > .product-name > .product-quantity').should('contain', produtos[0].quantidade)

        cy.get('tbody > :nth-child(2) > .product-name').should('contain', produtos[1].produto + ' - ' + produtos[1].tamanho + ', ' + produtos[1].cor)
        cy.get(':nth-child(2) > .product-name > .product-quantity').should('contain', produtos[1].quantidade)

        cy.get('tbody > :nth-child(3) > .product-name').should('contain', produtos[2].produto + ' - ' + produtos[2].tamanho + ', ' + produtos[2].cor)
        cy.get(':nth-child(3) > .product-name > .product-quantity').should('contain', produtos[2].quantidade)

        cy.get('tbody > :nth-child(4) > .product-name').should('contain', produtos[3].produto + ' - ' + produtos[3].tamanho + ', ' + produtos[3].cor)
        cy.get(':nth-child(4) > .product-name > .product-quantity').should('contain', produtos[3].quantidade)

        EnderecoPage.preencherDetalhesFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco01,
            dadosEndereco[1].endereco02,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
        );

        PagamentoPage.naEntrega();
        
        cy.get(':nth-child(1) > .woocommerce-table__product-name > a').should('contain', produtos[0].produto + ' - ' + produtos[0].tamanho + ', ' + produtos[0].cor)
        cy.get(':nth-child(1) > .woocommerce-table__product-name > .product-quantity').should('contain', produtos[0].quantidade)
        cy.get(':nth-child(2) > .woocommerce-table__product-name > a').should('contain', produtos[1].produto + ' - ' + produtos[1].tamanho + ', ' + produtos[1].cor)
        cy.get(':nth-child(2) > .woocommerce-table__product-name > .product-quantity').should('contain', produtos[1].quantidade)
        cy.get(':nth-child(3) > .woocommerce-table__product-name > a').should('contain', produtos[2].produto + ' - ' + produtos[2].tamanho + ', ' + produtos[2].cor)
        cy.get(':nth-child(3) > .woocommerce-table__product-name > .product-quantity').should('contain', produtos[2].quantidade)
        cy.get(':nth-child(4) > .woocommerce-table__product-name > a').should('contain', produtos[3].produto + ' - ' + produtos[3].tamanho + ', ' + produtos[3].cor)
        cy.get(':nth-child(4) > .woocommerce-table__product-name > .product-quantity').should('contain', produtos[3].quantidade)
    });
})