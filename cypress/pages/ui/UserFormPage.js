class UserFormPage {

    navigate() {
        cy.visit(`${Cypress.env("uiUrl")}/admin/cadastrarusuarios`);
    }

    fillForm({ nome, email, password, admin = true }) {
        cy.get("#nome").clear().type(nome);
        cy.get("#email").clear().type(email);
        cy.get("#password").clear().type(password);

        if (admin) {
            cy.get("#administrador").check({ force: true });
        }
    }

    submit() {
        cy.get("button[type=submit]").click();
    }

    expectSuccess() {
        cy.contains("Lista dos usuários").should("be.visible");
    }
}

export default new UserFormPage();