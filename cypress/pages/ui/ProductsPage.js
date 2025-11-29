class ProductsPage {

    navigate() {
        cy.visit(`${Cypress.env("uiUrl")}/admin/listarprodutos`);
    }

    expectProductInList(name) {
        cy.contains(name).should("exist");
    }
}

export default new ProductsPage();
