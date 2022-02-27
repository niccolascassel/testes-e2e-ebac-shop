class ProdutoPage {

    addProduto(produto, quantidade, tamanho, cor) {
        cy.visit('produtos')
        cy.get('[class="product-block grid"]').contains(produto).click()
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + cor).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()    
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “' + produto + '” foram adicionados no seu carrinho.')
    }
}

export default new ProdutoPage()