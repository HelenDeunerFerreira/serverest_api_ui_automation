class ProductFormPage {

    navigate() {
        cy.visit(`${Cypress.env("uiUrl")}/admin/cadastrarprodutos`);
    }

    fillForm({ nome, preco, descricao, quantidade }) {
        cy.get("#nome").type(nome);
        cy.get("#price").type(preco);
        cy.get("#description").type(descricao);
        cy.get("#quantity").type(quantidade);
    }

    submit() {
        cy.get("button[type=submit]").click();
    }

    expectSuccess() {
        cy.contains("Lista dos Produtos").should("be.visible");
    }
}

export default new ProductFormPage();