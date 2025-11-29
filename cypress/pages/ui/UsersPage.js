class UsersPage {

    navigate() {
        cy.visit(`${Cypress.env("uiUrl")}/admin/listarusuarios`);
    }

    getUserRow(email) {
        return cy.contains("td", email).parent("tr");
    }

    clickEdit(email) {
        this.getUserRow(email).find("button.btn.btn-info").click();
    }

    clickDelete(email) {
        this.getUserRow(email).find("button.btn.btn-danger").click();
    }

    expectUserInList(email) {
        cy.contains(email).should("exist");
    }

    expectUserNotInList(email) {
        cy.contains(email).should("not.exist");
    }
}

export default new UsersPage();