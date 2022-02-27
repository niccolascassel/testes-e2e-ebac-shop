class PagamentoPage {

    transferenciaBancaria() {
        cy.get('#payment_method_bacs').check()
        cy.wait(2000)
        cy.get('#terms').should('be.visible').check()
        cy.get('#place_order').click()
        
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
        cy.get('.woocommerce-order-overview__payment-method > strong').should('contain', 'Transferência bancária')
    }

    cheque() {
        cy.get('#payment_method_cheque').check()
        cy.wait(2000)
        cy.get('#terms').should('be.visible').check()
        cy.get('#place_order').click()
        
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
        cy.get('.woocommerce-order-overview__payment-method > strong').should('contain', 'Cheque')
    }

    naEntrega() {
        cy.get('#payment_method_cod').check()
        cy.wait(2000)
        cy.get('#terms').should('be.visible').check()
        cy.get('#place_order').click()
        
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
        cy.get('.woocommerce-order-overview__payment-method > strong').should('contain', 'Pagamento na entrega')
    }
}

export default new PagamentoPage()