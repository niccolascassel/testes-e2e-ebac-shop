class EnderecoPage {

    editarEnderecoFaturamento(nome, sobrenome, empresa, pais, endereco01, endereco02, cidade, estado, cep, telefone, email) {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()

        this.preencherDetalhesFaturamento(nome, sobrenome, empresa, pais, endereco01, endereco02, cidade, estado, cep, telefone, email)

        cy.get(':nth-child(2) > .button').click()
    }
    
    editarEnderecoEntrega() {
        //elementos + acoes
    }    

    preencherDetalhesFaturamento(nome, sobrenome, empresa, pais, endereco01, endereco02, cidade, estado, cep, telefone, email) {
        cy.get('#billing_first_name').clear().type(nome)        
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type(endereco01)
        cy.get('#billing_address_2').clear(endereco02)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado).get('[aria-selected="true"]').click()
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
    }
}

export default new EnderecoPage()